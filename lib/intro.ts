/**
 * Home entry-animation gate, shared by the root layout (which runs the head script)
 * and the preloader. Kept out of the "use client" preloader module so the server
 * layout gets the real values rather than client references.
 */

/** Session cookie (no expiry), shared across tabs: the intro has played. */
export const INTRO_COOKIE = "gpw_intro_seen";
/** On <html> while the home intro plays: CSS hides the nav from the first paint. */
export const PLAY_ATTR = "data-intro-play";
/** On <html> when the intro must not show: CSS hides the overlay from the first paint. */
export const SKIP_ATTR = "data-intro-skip";

/**
 * Runs in <head> on every full page load, before the body is parsed, so the nav and
 * hero never paint ahead of the overlay. A refresh of any page clears the cookie, so
 * the next home view plays the intro again; otherwise it plays once per session.
 */
export const INTRO_HEAD_SCRIPT = `(function(){try{var d=document.documentElement;var n=performance.getEntriesByType('navigation')[0];if(n&&n.type==='reload')document.cookie='${INTRO_COOKIE}=; path=/; max-age=0';if(location.pathname!=='/')return;var seen=document.cookie.split('; ').indexOf('${INTRO_COOKIE}=1')>-1;d.setAttribute(seen||matchMedia('(prefers-reduced-motion: reduce)').matches?'${SKIP_ATTR}':'${PLAY_ATTR}','');}catch(e){}})();`;
