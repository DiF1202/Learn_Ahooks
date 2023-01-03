import { defineConfig } from 'dumi';
import { menus } from './hooks';

const repo = 'ahooks';

export default defineConfig({
  title: ' ',
  favicon: '/simple-logo.svg',
  logo: '/logo.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // base: `/${repo}/`,
  // publicPath: `/${repo}/`,
  navs: {
    'zh-CN': [
      { title: '指南', path: '/zh-CN/guide' },
      { title: 'Hooks', path: '/zh-CN/hooks' },
    ],
    'en-US': [
      { title: 'Guide', path: '/guide' },
      { title: 'Hooks', path: '/hooks' },
    ],
  },
  // 开启exportStatic配置后会针对每个路由单独输出 HTML 文件，通常用于静态站点托管。
  exportStatic: {},
  // 当你需要兼容低版本浏览器时，可能需要该选项，开启后将默认使用 非现代 的打包工具做构建，这会显著增加你的构建时间。
  // 这里不开启
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  // 引入babel plugin 为antd按需引入
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
  // 开启动态加载
  dynamicImport: {},
  menus: {
    '/': [
      {
        title: 'Home',
        path: 'index',
      },
    ],
    '/hooks': menus,
    '/zh-CN/hooks': menus,
    // '/zh-CN': [
    //   {
    //     title: '首页',
    //     path: 'index',
    //   },
    // ],
    // '/guide': [
    //   {
    //     title: 'Intro',
    //     path: '/guide',
    //   },
    //   {
    //     title: 'v2 to v3',
    //     path: '/guide/upgrade',
    //   },
    //   {
    //     title: 'Hooks of dom specification',
    //     path: '/guide/dom',
    //   },
    //   {
    //     title: 'Blog',
    //     children: [
    //       {
    //         title: 'ahooks function specification',
    //         path: '/guide/blog/function',
    //       },
    //       {
    //         title: 'React Hooks & SSR',
    //         path: '/guide/blog/ssr',
    //       },
    //       {
    //         title: 'React Hooks & react-refresh（HMR）',
    //         path: '/guide/blog/hmr',
    //       },
    //       {
    //         title: 'React Hooks & strict mode',
    //         path: '/guide/blog/strict',
    //       },
    //     ],
    //   },
    // ],
    // '/zh-CN/guide': [
    //   {
    //     title: '介绍',
    //     path: '/guide',
    //   },
    //   {
    //     title: 'v2 to v3',
    //     path: '/guide/upgrade',
    //   },
    //   {
    //     title: 'DOM 类 Hooks 使用规范',
    //     path: '/guide/dom',
    //   },
    //   {
    //     title: 'Blog',
    //     children: [
    //       {
    //         title: 'ahooks 输入输出函数处理规范',
    //         path: '/zh-CN/guide/blog/function',
    //       },
    //       {
    //         title: 'React Hooks & SSR',
    //         path: '/zh-CN/guide/blog/ssr',
    //       },
    //       {
    //         title: 'React Hooks & react-refresh（HMR）',
    //         path: '/zh-CN/guide/blog/hmr',
    //       },
    //       {
    //         title: 'React Hooks & strict mode',
    //         path: '/zh-CN/guide/blog/strict',
    //       },
    //     ],
    //   },
    // ],
    // '/zh-CN/hooks': menus,
  },
});
