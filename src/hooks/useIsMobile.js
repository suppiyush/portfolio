import { useEffect, useState } from 'react';

const MOBILE_QUERY = '(max-width: 760px)'; // keep in sync with the CSS breakpoint

// Tracks whether the mobile layout breakpoint is active, so a component can
// switch behavior (not just styling) between desktop and mobile.
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const onChange = () => setIsMobile(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return isMobile;
}
