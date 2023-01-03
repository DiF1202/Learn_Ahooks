import { useEffect } from 'react';
import { isFunction } from '@/utils';
import useLatest from '../useLatest';

const useUnmount = (fn: () => void) => {
  if (!isFunction(fn)) {
    console.error(
      `useMount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`,
    );
  }
  const fnRef = useLatest(fn);
  useEffect(() => {
    return () => {
      fnRef?.current();
    };
  }, []);
};

export default useUnmount;
