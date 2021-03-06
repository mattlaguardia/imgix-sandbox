import React, { useRef, useState, useEffect } from 'react';
import Imgix from 'react-imgix';

const LazyImage = ({ src }) => {
  const rootRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const loading = 'https://gif.imgix.net/imgix-logo-ani.gif?frame=3';

  useEffect(() => {
    const defaultIntersectionOptions = {
      threshold: 0,
      rootMargin: '800px',
    };

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

	return (
    <Imgix
      src={ isVisible ? src : loading }
      width={ 600 }
      height={ 600 }
      imgixParams={{
        fit: 'crop',
        auto: 'format,compress',
        q: 25
      }}
      htmlAttributes={{
        alt:"Super Informative Alt Tag",
        ref: rootRef
      }}
    />
  );
};

export default LazyImage;
