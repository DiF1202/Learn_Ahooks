import React, { useMemo } from 'react';
import useToggle from '../useToggle';

export interface Actions {
  setFalse: () => void;
  setTrue: () => void;
  toggle: () => void;
  set: (value: boolean) => void;
}

function useBoolean(defaultValue: boolean = false): [boolean, Actions] {
  const [state, { set, toggle }] = useToggle(defaultValue);
  const actions: Actions = useMemo(() => {
    const setFalse = () => set(false);
    const setTrue = () => set(true);
    return {
      toggle,
      setTrue,
      setFalse,
      set: v => set(!!v),
    };
  }, []);

  return [state, actions];
}

export default useBoolean;
