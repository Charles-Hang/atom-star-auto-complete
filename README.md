# atom star css 自动补全插件

配合[postcss-atom-star]使用，为其提供补全提示功能

[postcss-atom-star]:https://www.npmjs.com/package/postcss-atom-star

## 配置项

### config

填写 postcss-atom-star 的配置文件的匹配字符串，Glob Patterns 格式，默认为\*\*/atomstarcss.config.js。配置后，会根据配置文件实时动态生成补全提示信息。如有额外的类需要加入提示，可用下面的 includes 配置手动添加

### includes

填写需要额外加入补全提示的 css 类名，用逗号分隔
