// Meta Pixel tracking utilities

declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: Record<string, any>) => void;
  }
}

/**
 * Track InitiateCheckout event when user clicks CTA to Whop
 */
export const trackInitiateCheckout = (ctaLocation: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    // Generate unique event ID for deduplication with Whop
    const eventId = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    window.fbq('track', 'InitiateCheckout', {
      content_name: 'Clarity Hub Premium',
      content_category: 'Course',
      value: 297,
      currency: 'USD',
      cta_location: ctaLocation
    });

    // Store event ID in sessionStorage for potential server-side API call
    try {
      sessionStorage.setItem('last_meta_event_id', eventId);
    } catch (e) {
      // Ignore storage errors
    }
  }
};

/**
 * Track custom event
 */
export const trackCustomEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  }
};
