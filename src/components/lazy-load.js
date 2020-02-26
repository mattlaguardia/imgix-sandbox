import React, { useRef, useState, useEffect } from 'react';

const ONE_PX_PNG =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

const LazyLoadImage = ({
    src,
    visibleByDefault,
    placeholderSrc,
    threshold,
    onVisibilityChange,
    ...otherProps
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
					rootMargin: '0px',
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
		<img height="600px" ref={rootRef} src={isVisible ? src : placeholderSrc} {...otherProps} alt="text" />
	);
};

LazyLoadImage.defaultProps = {
	visibleByDefault: false,
	placeholderSrc: ONE_PX_PNG,
	threshold: 100,
};

export default LazyLoadImage;
