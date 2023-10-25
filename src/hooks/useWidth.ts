import { useState, useEffect, useCallback } from 'react';

const useWidth = () => {
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  const [width, setWidth] = useState<number>(windowWidth);

  const handleResize = useCallback(() => setWidth(windowWidth), [windowWidth]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    setWidth(windowWidth);

    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth, handleResize]);

  return width;
};

export default useWidth;
