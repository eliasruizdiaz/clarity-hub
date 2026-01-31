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
 * Track InitiateCheckout event when user clicks CTA to Whop
 */
export const trackInitiateCheckout = (ctaLocation: string) => {
  if (typeof window === 'undefined') return;

  const eventId = generateEventId();
  const customData = {
    content_name: 'Clarity Hub Premium',
    content_category: 'Course',
    value: 297,
    currency: 'USD',
    cta_location: ctaLocation,
  };

  // Track on client-side (browser pixel)
  if (window.fbq) {
    window.fbq('track', 'InitiateCheckout', customData);
  }

  // Track on server-side (Conversions API)
  sendServerEvent('InitiateCheckout', eventId, customData);

  // Store event ID in sessionStorage for potential use
  try {
    sessionStorage.setItem('last_meta_event_id', eventId);
    sessionStorage.setItem('last_meta_event_time', Date.now().toString());
  } catch (e) {
    // Ignore storage errors
  }
};

/**
 * Track ViewContent event
 */
export const trackViewContent = (contentName: string, contentCategory: string) => {
  if (typeof window === 'undefined') return;

  const eventId = generateEventId();
  const customData = {
    content_name: contentName,
    content_category: contentCategory,
    content_type: 'video',
  };

  // Track on client-side
  if (window.fbq) {
    window.fbq('track', 'ViewContent', customData);
  }

  // Track on server-side
  sendServerEvent('ViewContent', eventId, customData);
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
