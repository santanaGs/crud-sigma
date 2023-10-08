import React,{ useEffect } from 'react';

export function useUpdateEffect(effect, deps) {
  const isFirst = React.useRef(true);

  useEffect(() => {
    if (!isFirst.current) {
      return effect();
    }
    isFirst.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
