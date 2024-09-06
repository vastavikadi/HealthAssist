import { useState, useRef, useEffect } from 'react';
import SlCarousel from '@shoelace-style/shoelace/dist/react/carousel';
import SlCarouselItem from '@shoelace-style/shoelace/dist/react/carousel-item';
import SlDivider from '@shoelace-style/shoelace/dist/react/divider';

const css = `
  .carousel-thumbnails {
    --slide-aspect-ratio: 16 / 9;
  }

  .thumbnails {
    display: flex;
    justify-content: center;
    margin-top: 1rem; /* Adjust margin if needed */
  }

  .thumbnails__scroller {
    display: flex;
    gap: var(--sl-spacing-small);
    overflow-x: auto;
    scrollbar-width: none;
    scroll-behavior: smooth;
    scroll-padding: var(--sl-spacing-small);
  }

  .thumbnails__scroller::-webkit-scrollbar {
    display: none;
  }

  .thumbnails__image {
    width: 120px; /* Adjust width if needed */
    height: auto;
    object-fit: cover;

    opacity: 0.5;
    will-change: opacity;
    transition: 250ms opacity;

    cursor: pointer;
  }

  .thumbnails__image.active {
    opacity: 1;
  }

  .aspect-ratio {
    width: 100%;
    max-width: 100%;
    aspect-ratio: 16 / 9; /* Ensure the aspect ratio is maintained */
    margin: 0 auto;
  }
`;

const images = [
  {
    src: '/logo192.png',
    alt: 'Health-Assist',
  },
  {
    src: '/logo101.png',
    alt: 'Health-Assist',
  },
  {
    src: '/logo202.jpg',
    alt: 'Health-Assist',
  },
];

const App = () => {
  const carouselRef = useRef(null);
  const thumbnailsRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [aspectRatio, setAspectRatio] = useState('16 / 9');

  useEffect(() => {
    const thumbnails = Array.from(thumbnailsRef.current.querySelectorAll('.thumbnails__image'));
    if (thumbnails[currentSlide]) {
      thumbnails[currentSlide].scrollIntoView({
        block: 'nearest',
      });
    }
  }, [currentSlide]);

  const handleThumbnailClick = (index) => {
    carouselRef.current.goToSlide(index);
  };

  const handleSlideChange = (event) => {
    const slideIndex = event.detail.index;
    setCurrentSlide(slideIndex);
  };

  return (
    <>
      <SlCarousel
        ref={carouselRef}
        className="carousel-thumbnails"
        navigation
        pagination
        slidesPerPage={2}
        slidesPerMove={2}
        autoplay
        loop
        onSlSlideChange={handleSlideChange}
        style={{ '--aspect-ratio': aspectRatio }}
      >
        {images.map(({ src, alt }, index) => (
          <SlCarouselItem key={index} className="aspect-ratio">
            <img alt={alt} src={src} />
          </SlCarouselItem>
        ))}
      </SlCarousel>

      <div className="thumbnails">
        <div className="thumbnails__scroller" ref={thumbnailsRef}>
          {images.map(({ src }, i) => (
            <img
              key={i}
              alt={`Thumbnail ${i + 1}`}
              className={`thumbnails__image ${i === currentSlide ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(i)}
              src={src}
            />
          ))}
        </div>
      </div>

      <SlDivider />

      <style>{css}</style>
    </>
  );
};

export default App;
