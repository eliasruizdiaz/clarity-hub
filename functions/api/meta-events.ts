/**
 * Cloudflare Function para enviar eventos a Meta Conversions API
 * Endpoint: POST /api/meta-events
 */

interface MetaEventRequest {
  event_name: string;
  event_id: string;
  event_time: number;
  event_source_url: string;
  user_data: {
    fbp?: string;
    fbc?: string;
    client_user_agent: string;
    client_ip_address?: string;
  };
  custom_data?: Record<string, any>;
}

interface Env {
  META_PIXEL_ID: string;
  META_ACCESS_TOKEN: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validate environment variables
    if (!env.META_PIXEL_ID || !env.META_ACCESS_TOKEN) {
      return new Response(
        JSON.stringify({ 
          error: 'Missing META_PIXEL_ID or META_ACCESS_TOKEN environment variables' 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Parse request body
    const eventData: MetaEventRequest = await request.json();

    // Get client IP from Cloudflare headers
    const clientIP = request.headers.get('CF-Connecting-IP') || 
                     request.headers.get('X-Forwarded-For')?.split(',')[0] ||
                     eventData.user_data.client_ip_address;

    // Build Meta Conversions API payload
    const payload = {
      data: [
        {
          event_name: eventData.event_name,
          event_time: eventData.event_time,
          event_id: eventData.event_id,
          event_source_url: eventData.event_source_url,
          action_source: 'website',
          user_data: {
            client_ip_address: clientIP,
            client_user_agent: eventData.user_data.client_user_agent,
            fbp: eventData.user_data.fbp,
            fbc: eventData.user_data.fbc,
          },
          custom_data: eventData.custom_data || {},
        },
      ],
    };

    // Send to Meta Conversions API
    const metaResponse = await fetch(
      `https://graph.facebook.com/v18.0/${env.META_PIXEL_ID}/events?access_token=${env.META_ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    const metaResult = await metaResponse.json();

    if (!metaResponse.ok) {
      console.error('Meta API Error:', metaResult);
      return new Response(
        JSON.stringify({ 
          error: 'Failed to send event to Meta', 
          details: metaResult 
        }),
        { 
          status: metaResponse.status, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        events_received: metaResult.events_received || 1,
        fbtrace_id: metaResult.fbtrace_id 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Server error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error', 
        message: error instanceof Error ? error.message : 'Unknown error' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
};
