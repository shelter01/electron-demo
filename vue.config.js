module.exports = {
  productionSourceMap: false,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      directories: {
        output: './dist_electron', // 输出文件路径
      },
      nsis: {
        uninstallDisplayName: '卸载这个软件',
        oneClick: false,
        perMachine: false,
        allowToChangeInstallationDirectory: true,
        allowElevation: true,
        createDesktopShortcut: true,
      },
    },
  },
  css: {
    sourceMap: false,
    loaderOptions: {
      less: {
        // 配置less（其他样式解析用法一致）
        javascriptEnabled: true, // 设置为true
      },
    },
  },
}
