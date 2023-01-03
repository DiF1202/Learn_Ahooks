/**
 * title: Basic usage
 * desc: The function is called right after the component is mounted.
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: 在组件首次渲染时，执行方法。
 */

import useMount from '@/hooks/useMount';
import useBoolean from '@/hooks/useBoolean';
import { message } from 'antd';
import React from 'react';
import { Button } from 'antd';

const MyComponent = () => {
  useMount(() => {
    message.info('mount');
  });

  return <div>Hello World</div>;
};

export default () => {
  const [state, { toggle }] = useBoolean(false);

  return (
    <>
      <Button onClick={toggle}>{state ? 'unmount' : 'mount'}</Button>
      {state && <MyComponent />}
    </>
  );
};
