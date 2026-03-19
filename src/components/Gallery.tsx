import { useState, useRef, useCallback, useEffect } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(400);
  const startX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const total = images.length;

  // Measure the current image and set viewport height
  const updateHeight = useCallback(() => {
    const img = imgRef.current;
    const container = containerRef.current;
    if (!img || !container) return;

    const containerWidth = container.offsetWidth;
    const naturalW = img.naturalWidth || 1;
    const naturalH = img.naturalHeight || 1;
    const ratio = naturalH / naturalW;
    const computed = containerWidth * ratio;
    const maxH = window.innerHeight * 0.8;
    setViewportHeight(Math.min(computed, maxH));
  }, []);

  useEffect(() => {
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [current, updateHeight]);

  const goTo = useCallback(
    (index: number, dir: 'left' | 'right') => {
      if (isAnimating || total <= 1) return;
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setDirection(null);
        setIsAnimating(false);
      }, 500);
    },
    [isAnimating, total]
  );

  const next = useCallback(() => {
    goTo((current + 1) % total, 'left');
  }, [current, total, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + total) % total, 'right');
  }, [current, total, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    el.addEventListener('keydown', handleKey);
    return () => el.removeEventListener('keydown', handleKey);
  }, [next, prev]);

  // Touch / mouse drag handlers
  const handleDragStart = (clientX: number) => {
    if (total <= 1) return;
    setIsDragging(true);
    startX.current = clientX;
    setDragX(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    setDragX(clientX - startX.current);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const threshold = 60;
    if (dragX < -threshold) {
      next();
    } else if (dragX > threshold) {
      prev();
    }
    setDragX(0);
  };

  const nextIndex = (current + 1) % total;
  const prevIndex = (current - 1 + total) % total;

  const getAnimClass = () => {
    if (direction === 'left') return 'gallery-slide-exit-left';
    if (direction === 'right') return 'gallery-slide-exit-right';
    return 'gallery-slide-active';
  };

  const getIncomingClass = () => {
    if (direction === 'left') return 'gallery-slide-enter-left';
    if (direction === 'right') return 'gallery-slide-enter-right';
    return '';
  };

  const incomingIndex = direction === 'left' ? nextIndex : prevIndex;

  if (total === 0) return null;

  return (
    <div className="gallery-carousel" ref={containerRef} tabIndex={0}>
      <div
        className="gallery-viewport"
        style={{ height: viewportHeight, transition: 'height 0.4s ease' }}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
      >
        {/* Current image */}
        <div
          className={`gallery-slide ${getAnimClass()}`}
          style={{
            transform: isDragging ? `translateX(${dragX}px) scale(${1 - Math.abs(dragX) * 0.0005})` : undefined,
            transition: isDragging ? 'none' : undefined,
          }}
        >
          <img
            ref={imgRef}
            src={images[current].src}
            alt={images[current].alt}
            draggable={false}
            onLoad={updateHeight}
          />
        </div>

        {/* Incoming image (only during animation) */}
        {direction && (
          <div className={`gallery-slide ${getIncomingClass()}`}>
            <img src={images[incomingIndex].src} alt={images[incomingIndex].alt} draggable={false} />
          </div>
        )}

        {/* Drag hint overlay */}
        {isDragging && Math.abs(dragX) > 30 && (
          <div className={`gallery-drag-hint ${dragX < 0 ? 'gallery-drag-hint--next' : 'gallery-drag-hint--prev'}`}>
            <svg viewBox="0 0 24 24">
              {dragX < 0
                ? <polyline points="9 18 15 12 9 6" />
                : <polyline points="15 18 9 12 15 6" />
              }
            </svg>
          </div>
        )}
      </div>

      {/* Navigation arrows */}
      {total > 1 && (
        <>
          <button className="gallery-arrow gallery-arrow--prev" onClick={prev} aria-label="Previous image">
            <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button className="gallery-arrow gallery-arrow--next" onClick={next} aria-label="Next image">
            <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </>
      )}

      {/* Dots indicator */}
      {total > 1 && (
        <div className="gallery-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`gallery-dot ${i === current ? 'gallery-dot--active' : ''} ${direction && i === incomingIndex ? 'gallery-dot--incoming' : ''}`}
              onClick={() => {
                if (i === current) return;
                goTo(i, i > current ? 'left' : 'right');
              }}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Counter */}
      {total > 1 && (
        <div className="gallery-counter">
          <span className="gallery-counter-current">{String(current + 1).padStart(2, '0')}</span>
          <span className="gallery-counter-sep">/</span>
          <span className="gallery-counter-total">{String(total).padStart(2, '0')}</span>
        </div>
      )}
    </div>
  );
}
