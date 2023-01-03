import React, { useEffect } from 'react';
import { isFunction } from '@/utils';

const useMount = (fn: () => void) => {
  if (!isFunction(fn)) {
    console.error(
      `useMount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`,
    );
  }
  useEffect(() => {
    fn?.();
  }, []);
  return <div>index</div>;
};

export default useMount;
