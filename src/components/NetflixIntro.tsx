'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const INTRO_MS = 3400;
const EXIT_MS = 850;
const INTRO_KEY = 'mbatshi_intro_seen_v1';

export function NetflixIntro() {
  const [mounted, setMounted] = useState(false);
  const [renderIntro, setRenderIntro] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);

    let hasSeenIntro = false;
    try {
      hasSeenIntro = sessionStorage.getItem(INTRO_KEY) === '1';
    } catch {
      hasSeenIntro = false;
    }

    if (hasSeenIntro) return;

    setRenderIntro(true);
    setVisible(true);

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem(INTRO_KEY, '1');
      } catch {
        // ignore write failures
      }
    }, INTRO_MS);

    const unmountTimer = window.setTimeout(() => {
      setRenderIntro(false);
    }, INTRO_MS + EXIT_MS);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(unmountTimer);
    };
  }, []);

  useEffect(() => {
    if (!renderIntro) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previous;
    };
  }, [renderIntro]);

  if (!mounted || !renderIntro) return null;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="netflix-intro-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: EXIT_MS / 1000, ease: 'easeInOut' } }}
        >
          <div className="netflix-intro-stage" aria-hidden="true">
            <div className="netflix-intro-rim" />
            <div className="netflix-intro-mn">
              <span className="netflix-intro-m-left" />
              <span className="netflix-intro-m-mid-left" />
              <span className="netflix-intro-m-mid-right" />
              <span className="netflix-intro-m-right" />
              <span className="netflix-intro-n-left" />
              <span className="netflix-intro-n-mid" />
              <span className="netflix-intro-n-right" />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
