import { useState, useEffect, useCallback } from 'react';
import _debounce from 'debounce';

const useWidth = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', _debounce(handleResize, 200));
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return width;
};

export default useWidth;
