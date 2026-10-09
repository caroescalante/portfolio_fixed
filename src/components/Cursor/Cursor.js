import { useEffect, useRef } from 'react';
import './Cursor.css';

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label';

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Solo en dispositivos con mouse (en celu/tablet táctil no se muestra)
    const hasMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasMouse) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    document.body.classList.add('has-custom-cursor');

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      dot.classList.add('is-visible');
      ring.classList.add('is-visible');
    };

    // el aro sigue al mouse con un pequeño retraso suave
    const loop = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const onOver = (e) => {
      const isInteractive = !!e.target.closest(INTERACTIVE);
      ring.classList.toggle('is-hover', isInteractive);
      dot.classList.toggle('is-hover', isInteractive);
    };

    const onDown = () => ring.classList.add('is-down');
    const onUp = () => ring.classList.remove('is-down');

    const onLeave = () => {
      dot.classList.remove('is-visible');
      ring.classList.remove('is-visible');
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.documentElement.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <div className="cursor-ring-inner">
          <span className="cursor-sparkle">✦</span>
        </div>
      </div>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true">
        <div className="cursor-dot-inner" />
      </div>
    </>
  );
};

export default Cursor;