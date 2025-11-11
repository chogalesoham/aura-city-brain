import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * CustomCursor Component
 * Minimal, elegant custom cursor matching website's cyan/teal theme
 * Smooth GSAP-powered movement with subtle glow effect
 */
const CustomCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check for mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) || window.innerWidth < 768;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Don't initialize on mobile or if user prefers reduced motion
    if (isMobile || prefersReducedMotion) {
      return;
    }

    const cursorDot = cursorDotRef.current;
    const cursorRing = cursorRingRef.current;

    if (!cursorDot || !cursorRing) return;

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Animate cursor dot (fast, direct follow)
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: 'power3.out',
      });

      // Animate cursor ring (slower, smooth lag effect)
      gsap.to(cursorRing, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: 'power3.out',
      });
    };

    // Hide cursor when leaving window
    const handleMouseLeave = () => {
      gsap.to([cursorDot, cursorRing], {
        opacity: 0,
        duration: 0.2,
      });
    };

    // Show cursor when entering window
    const handleMouseEnter = () => {
      gsap.to([cursorDot, cursorRing], {
        opacity: 1,
        duration: 0.2,
      });
    };

    // Scale up on clickable elements hover
    const handleLinkHover = () => {
      gsap.to(cursorRing, {
        scale: 1.8,
        borderWidth: '1px',
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(cursorDot, {
        scale: 0.8,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    // Scale back to normal
    const handleLinkLeave = () => {
      gsap.to(cursorRing, {
        scale: 1,
        borderWidth: '2px',
        duration: 0.3,
        ease: 'power2.out',
      });
      gsap.to(cursorDot, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    // Scale down on click
    const handleMouseDown = () => {
      gsap.to([cursorDot, cursorRing], {
        scale: 0.9,
        duration: 0.1,
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursorDot, {
        scale: 1,
        duration: 0.2,
      });
      gsap.to(cursorRing, {
        scale: 1,
        duration: 0.2,
      });
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, select, [role="button"], [onclick]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleLinkHover);
      el.addEventListener('mouseleave', handleLinkLeave);
    });

    // Cleanup
    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);

      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleLinkHover);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Cursor Dot - Small inner dot */}
      <div
        ref={cursorDotRef}
        style={{
          position: 'fixed',
          top: '-6px',
          left: '-6px',
          width: '12px',
          height: '12px',
          backgroundColor: 'hsl(188, 100%, 50%)', // Cyan color
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          mixBlendMode: 'screen',
          boxShadow: '0 0 15px rgba(0, 212, 255, 0.8), 0 0 30px rgba(0, 212, 255, 0.4)',
        }}
        aria-hidden="true"
      />

      {/* Cursor Ring - Outer ring with border */}
      <div
        ref={cursorRingRef}
        style={{
          position: 'fixed',
          top: '-20px',
          left: '-20px',
          width: '40px',
          height: '40px',
          border: '2px solid hsl(188, 100%, 50%)', // Cyan border
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          boxShadow: '0 0 20px rgba(0, 212, 255, 0.3), inset 0 0 20px rgba(0, 212, 255, 0.1)',
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
