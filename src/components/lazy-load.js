import React, { useRef, useState, useEffect } from 'react';
import Imgix from 'react-imgix';

const LazyLoadImage = ({
    src,
    visibleByDefault,
    onVisibilityChange,
  }) => {
    const rootRef = useRef();
    const [isVisible, setIsVisible] = useState(visibleByDefault);
    const placeholderSrc = 'https://assets.imgix.net/examples/pione.jpg?q=1&blur=50';
    const defaultIntersectionOptions = {
        threshold: 0,
        rootMargin: '500px',
      }

	useEffect(() => {
    const checkIntersections = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

		if (!isVisible) {
			const newIO = new IntersectionObserver(checkIntersections, defaultIntersectionOptions);
      newIO.observe(rootRef.current);
			return () => newIO.disconnect();
		}
	}, [isVisible]);

  useEffect(() => {
		if (isVisible) onVisibilityChange && onVisibilityChange();
  }, [isVisible, onVisibilityChange]);

	return (
    <Imgix
        src={isVisible ? src : placeholderSrc}
        width={600}
        height={600}
        htmlAttributes={{
          alt:"Super Informative Alt Tag",
          ref: rootRef
        }}
      />
	);
};

export default LazyLoadImage;
