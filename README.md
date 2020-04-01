# uni-wechat
### 基于uni-app的适合于微信小程序开发者的架子
### github地址： [uni-wechat](https://github.com/pro-xiaoy/uni-wechat)
[uni官网](https://uniapp.dcloud.io/)，对于这个架子我只能表示对webpack的工程化打包蛮佩服的。
### 基础功能
* rpx单位（由于移动端开发ui给的尺寸基本都是以750为主，我们可以直接对应ui给的尺寸直接赋值）
* 原生的wx方法大部分可以改为uni调用
* 注意看***package.json***里面的命令
### 增加功能
* 增加了vuex
* 对原生的地图定位增加配置文件
* 模拟bar已经title目前的样式增加了修改
* 样式的重新初始化
* 请求方式封装



## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
