// Meta Pixel tracking utilities

declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: Record<string, any>) => void;
  }
}

/**
 * Get cookie value by name
 */
const getCookie = (name: string): string | undefined => {
  if (typeof document === 'undefined') return undefined;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return undefined;
};

/**
 * Generate unique event ID for deduplication
 */
const generateEventId = (): string => {
  return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Send event to server-side Conversions API
 */
const sendServerEvent = async (
  eventName: string,
  eventId: string,
  customData?: Record<string, any>
) => {
  try {
    const response = await fetch('/api/meta-events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_name: eventName,
        event_id: eventId,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: window.location.href,
        user_data: {
          fbp: getCookie('_fbp'),
          fbc: getCookie('_fbc'),
          client_user_agent: navigator.userAgent,
        },
        custom_data: customData,
      }),
    });

    if (!response.ok) {
      console.warn('Failed to send server event:', await response.text());
    }
  } catch (error) {
    console.warn('Error sending server event:', error);
    // Don't throw - we don't want to break the user experience
  }
};

/**
 * Track Lead event
 */
export const trackLead = (contentName: string, contentCategory: string) => {
  if (typeof window === 'undefined') return;

  const eventId = generateEventId();
  const customData = {
    content_name: contentName,
    content_category: contentCategory,
  };

  // Track on client-side
  if (window.fbq) {
    window.fbq('track', 'Lead', customData);
  }

  // Track on server-side
  sendServerEvent('Lead', eventId, customData);
};

/**
 * Track Schedule event when user clicks the "Agendá 30 min" CTA (Google Calendar).
 * This is the PRIMARY conversion event for the ROI Scan funnel.
 */
export const trackSchedule = (ctaLocation: string) => {
  if (typeof window === 'undefined') return;

  const eventId = generateEventId();
  // Sin `value`: el agendado es gratis. Optimizamos por cantidad de agendados,
  // no por un valor monetario (poner $1.500 acá infla el ROAS en Meta).
  const customData = {
    content_name: 'Discovery 30 min',
    content_category: 'ROI Scan',
    cta_location: ctaLocation,
  };

  // Track on client-side (browser pixel)
  if (window.fbq) {
    window.fbq('track', 'Schedule', customData);
  }

  // Track on server-side (Conversions API)
  sendServerEvent('Schedule', eventId, customData);

  try {
    sessionStorage.setItem('last_meta_event_id', eventId);
    sessionStorage.setItem('last_meta_event_time', Date.now().toString());
  } catch (e) {
    // Ignore storage errors
  }
};

/**
 * Track Contact event for DFY services (WhatsApp)
 */
export const trackContact = (serviceName: string, serviceValue: number) => {
  if (typeof window === 'undefined') return;

  const eventId = generateEventId();
  const customData = {
    content_name: serviceName,
    content_category: 'DFY Service',
    value: serviceValue,
    currency: 'USD',
  };

  // Track on client-side
  if (window.fbq) {
    window.fbq('track', 'Contact', customData);
  }

  // Track on server-side
  sendServerEvent('Contact', eventId, customData);
};

/**
 * Track custom event
 */
export const trackCustomEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window === 'undefined') return;

  const eventId = generateEventId();

  // Track on client-side
  if (window.fbq) {
    window.fbq('track', eventName, params);
  }

  // Track on server-side
  sendServerEvent(eventName, eventId, params);
};
