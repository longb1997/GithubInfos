import React, { useRef, useEffect } from 'react';

export default function useInterval(callback, delay) {
  const savedCallback = useRef(null);

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => {
        console.log('clearInterval');
        clearInterval(id);
      };
    }
  }, [delay]);
}
