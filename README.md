# kimshareclub_admin

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


1、vue init webpack project_name
2、去掉eslint校验 -- 修改.eslintignore和config/index.js
3、npm install axios -D
4、npm install element-ui -D
5、npm install css-loader -D
6、npm install vue-style-loader -D
7、npm install sass-loader node-sass --save-dev
8、npm install sass-resources-loader --save-dev
9、在build/utils.js下引入全局scss文件
    // scss: generateLoaders('sass'),
    scss: generateLoaders('sass').concat({
      loader: 'sass-resources-loader',
      options: {
        resources: path.resolve(__dirname, '../src/assets/style/element-variables.scss') // 需要全局引入的文件
      }
    }),
10、安装vue-i18n国际化
    npm i vue-i18n -D
    配置i18n下的语言包等加载入口
    配置main.js的i18n入口