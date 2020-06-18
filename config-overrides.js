const path = require('path')
const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addBundleVisualizer,
  addWebpackPlugin,
  addLessLoader,
} = require('customize-cra')

const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

module.exports = override(
  // 这里直接看 ant-design 官网文档上`使用 create-react-app` 部分，有详细介绍
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),

  // 路径别名配置
  // 对应到 jsconfig.json 中的配置
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src'),
  }),

  // 添加依赖包大小分析
  // 第二个参数为 true，需要使用 `yarn build --analyze`
  addBundleVisualizer(
    {
      analyzerMode: 'static',
      reportFilename: 'report.html',
    },
    true,
  ),

  addLessLoader({
    lessOptions: {
      modifyVars: { '@primary-color': '#ff9212' },
      javascriptEnabled: true,
    },
  }),

  // 使用 Day.js 替换 momentjs 优化打包大小
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
)
