import { useEffect, useRef, useState } from 'react';

const useScrolledToEdge = (callback, offsetValue) => {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);

  const offset = offsetValue ? offsetValue : 0;
  const container = useRef(null);

  useEffect(() => {
    
    if (container.current != null) {
      container.current.addEventListener('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll);
    }
    window.addEventListener('resize', handleScroll);

    handleScroll();

    return () => {
      if (container.current != null) {
        container.current.removeEventListener('scroll', handleScroll);
      } else {
        window.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', handleScroll);
    };
  });

  useEffect(() => callback({x, y}), [x, y]);

  const handleScroll = () => {
    let containerHeight = document.body.scrollHeight;
    let containerWidth = document.body.scrollWidth;
    let scrollPositionX = window.scrollX;
    let scrollPositionY = window.scrollY;
    let wrapperHeight = document.body.offsetHeight;
    let wrapperWidth = document.body.offsetWidth;

    if (container.current != null) {
      containerHeight = container.current.scrollHeight;
      containerWidth = container.current.scrollWidth;
      scrollPositionX = container.current.scrollLeft;
      scrollPositionY = container.current.scrollTop;
      wrapperHeight = container.current.offsetHeight;
      wrapperWidth = container.current.offsetWidth;
    }
    if (containerWidth > wrapperWidth) {
      if (scrollPositionX <= 0 + offset) {
        setX('start');
      } else if (scrollPositionX + wrapperWidth + offset >= containerWidth - 1) {
        setX('end');
      } else {
        setX('middle');
      }
    } else {
      setX(null);
    }

    if (containerHeight > wrapperHeight) {
      if (scrollPositionY <= 0 + offset) {
        setY('start');
      } else if (scrollPositionY + wrapperHeight + offset >= containerHeight - 1) {
        setY('end');
      } else {
        setY('middle');
      }
    } else {
      setY(null);
    }
  };

  return container;
};

export default useScrolledToEdge;