# tiger ria css自动补全插件

配合[postcss-tiger-ria]使用，为其提供补全提示功能

[postcss-tiger-ria]:https://www.npmjs.com/package/postcss-tiger-ria

## 配置项

### config

填写postcss-tiger-ria的配置文件的匹配字符串，Glob Patterns格式，默认为**/riacss.config.js。配置后，会根据配置文件实时动态生成补全提示信息。配置文件中通过plugin自定义的类不会生成对应的类信息，需用下面的includes配置手动添加

### includes

填写需要额外加入补全提示的css类名，用逗号分隔
