import store from '../store';

const CONSOLE_STYLE = 'color: #E87E04';
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const analyticsCategory = 'Special';

/**
 * Send analytics events via GTM
 * @param {String} label - event label
 * @param {String} action - event action ("Click" by default)
 */
export const sendEvent = (label, action = 'Click') => {
  const value = `${analyticsCategory} — loc: ${store.state.params.location} — ${label} — ${action}`;

  if (!IS_PRODUCTION) {
    console.log(`Analytics: %c${value}`, CONSOLE_STYLE);
  }

  if (window.dataLayer !== undefined && analyticsCategory) {
    window.dataLayer.push({
      event: 'data_event',
      data_description: value,
    });
  }
};

/**
 * Send pageview event via GTM
 */
export const sendPageView = () => {
  if (!IS_PRODUCTION) {
    console.log('Analytics: %cPage — View', CONSOLE_STYLE);
  }

  if (window.dataLayer !== undefined) {
    window.dataLayer.push({
      event: 'Page — View',
      post_details: {},
      section: 'special',
      tags: [],
      title: document.title,
      url: window.location.pathname,
    });
  }
};
