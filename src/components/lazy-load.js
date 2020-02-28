import React, { useRef, useState, useEffect } from 'react';
import Imgix from 'react-imgix';

const LazyLoadImage = ({
    src,
    visibleByDefault,
    placeholderSrc,
    threshold,
    onVisibilityChange,
  }) => {
    const rootRef = useRef();
    const [isVisible, setIsVisible] = useState(visibleByDefault);

	useEffect(() => {
    const checkIntersections = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

		if (!isVisible) {
			const newIntersectionObserver = new IntersectionObserver(
				checkIntersections,
				{
          threshold: 0,
					rootMargin: '500px',
				}
      );
			newIntersectionObserver.observe(rootRef.current);
			return () => newIntersectionObserver.disconnect();
		}
	}, [isVisible]);

  useEffect(() => {
		if (isVisible) {
			onVisibilityChange && onVisibilityChange();
		}
  }, [isVisible, onVisibilityChange]);

	return (
    <div height='600px' ref={rootRef}>
      <Imgix
          src={isVisible ? src : placeholderSrc}
          width={600}
          height={600}
          htmlAttributes={{
            alt: "Super Informative Alt Tag"
          }}
        />
    </div>
	);
};

LazyLoadImage.defaultProps = {
	visibleByDefault: false,
	placeholderSrc: 'https://assets.imgix.net/examples/pione.jpg?q=1&blur=50',
	threshold: 100,
};

export default LazyLoadImage;
