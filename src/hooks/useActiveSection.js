import { useCallback, useEffect, useRef, useState } from 'react';
import { SECTIONS } from '../data/sections';

// Tracks which section is "active" based on scroll position, and exposes a
// ref/handler pair to wire up the scrollable content pane, plus a
// click-to-scroll helper for the nav.
export function useActiveSection() {
  const contentRef = useRef(null);
  const [active, setActive] = useState(SECTIONS[0].id);

  const updateActive = useCallback(() => {
    const container = contentRef.current;
    if (!container) return;
    const top = container.scrollTop + container.clientHeight * 0.3;
    let current = SECTIONS[0].id;
    for (const s of SECTIONS) {
      const el = container.querySelector('#' + s.id);
      if (el && el.offsetTop <= top) current = s.id;
    }
    setActive((prev) => (prev === current ? prev : current));
  }, []);

  useEffect(() => {
    updateActive();
  }, [updateActive]);

  const scrollToSection = useCallback((id) => {
    const container = contentRef.current;
    if (!container) return;
    const el = container.querySelector('#' + id);
    if (el) container.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
  }, []);

  return { contentRef, active, updateActive, scrollToSection };
}
