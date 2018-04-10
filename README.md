该项目为快应用练手项目，基于豆瓣api v2。
> 说明：按照官方文档所说推荐使用node v6.11.3这个版本，而我本地使用的是8以上的版本。所以就使用了nvm来管理node的版本，切换非常方便，关于nvm请自行google。

~~~
## 克隆项目
git clone git@github.com:keenjaan/quick-app-douban.git
## 安装依赖
npm install
## 运行项目
npm run watch
## 运行本地服务，手机远程调试
npm run server -- --port 1234
~~~


预览图：

![页面展示](shotscreen/5.gif)	![页面展示](shotscreen/6.gif)	![页面展示](shotscreen/7.gif)	![页面展示](shotscreen/8.gif)	![换肤](shotscreen/1.gif)
~~~bash
├─ .babelrc
├─ .eslintrc.json
├─ .gitignore
├─ .npmignore
├─ package.json
├─ README.md
│
├─sign
|
│
├─src   页面文件
│  │  assets 		图片文件夹
│  │  Common    	公共文件夹
|  |  app.ux		入口文件
│  │  manifest.json 配置文件
│  |  util.js		公用函数库
│  │   
│  │
│  ├─module
│  │  ├─es6.js		对async、await等支持
│  │  │      
│  │  ├─network.js	对网络请求模块封装        
│  │  
│  ├─About 关于页面
│  │  ├─index.ux
│  │       
│  ├─HomePage 主页
│  │  ├─index.ux
│  │
|  ├─Theme 主题页
│  │  ├─index.ux
|  |
|  ├─Movie 电影详情页
│  │  ├─index.ux
|  |
|  ├─Book 图书详情页
│  │  ├─index.ux
|  |
|  ├─Music 音乐详情页
│  │  ├─index.ux
|  |
|  ├─Home 主页
│  │  ├─index.ux
|  |  |
|  |  ├─list	列表组件
|  |  |  ├─index.ux
|  |  |
|  |  ├─movie	电影tabs组件
|  |  |  ├─index.ux
|  |  |
|  |  ├─book	图书tabs组件
|  |  |  ├─index.ux
|  |  |
|  |  ├─music	音乐tabs组件
|  |  |  ├─index.ux
|  |  |
|  ├─components		组件	
|  |  |
|  |  ├─cover	封面组件
|  |  |  ├─index.ux
|  |  |
|  |  ├─header	头部组件
|  |  |  ├─index.ux
|  |  |
|  |  ├─rating	评分组件
|  |  |  ├─index.ux
~~~

