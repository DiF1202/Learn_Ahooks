import React, { useState, useMemo } from 'react';

export interface Actions<T> {
  setLeft: () => void;
  setRight: () => void;
  set: (value: T) => void;
  toggle: () => void;
}

// // 情况一:传入的是布尔值 , 默认值也是布尔值
// function useToggle<T = boolean>(): [boolean, Actions<T>];
// // 情况二:
// function useToggle<T>(defaultValue: T): [T, Actions<T>];
// // 情况三:传入的是两个T,U的泛型类型
// function useToggle<T, U>(
//   defaultValue: T,
//   reverseValue: U,
// ): [T | U, Actions<T | U>];

function useToggle<T = boolean>(): [boolean, Actions<T>];

function useToggle<T>(defaultValue: T): [T, Actions<T>];

function useToggle<T, U>(
  defaultValue: T,
  reverseValue: U,
): [T | U, Actions<T | U>];

function useToggle<D, R>(
  defaultValue: D = (false as unknown) as D,
  reverseValue?: R,
) {
  const [state, setState] = useState<D | R>(defaultValue);

  const actions = useMemo(() => {
    const reverseValueOrigin = (reverseValue === undefined
      ? !defaultValue
      : reverseValue) as D | R;
    const setLeft = () => setState(defaultValue);
    const setRight = () => setState(reverseValueOrigin);
    const set = (value: D | R) => setState(value);
    const toggle = () =>
      setState(s => (s === defaultValue ? reverseValueOrigin : defaultValue));

    return {
      setLeft,
      setRight,
      set,
      toggle,
    };
  }, []);

  return [state, actions];
}

export default useToggle;
