<!--
 * @Author: heye
 * @Date: 2022-07-19 17:11:10
 * @LastEditors: heye
 * @LastEditTime: 2022-07-19 17:12:13
 * @FilePath: \Realtime-Chat-App\server\README.md
 * @Description: 
 * 
-->

## dotenv

dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中。将环境相关的配置独立于代码之外亦是 The Twelve-Factor App 的要素之一。
```js
npm install dotenv -S
```

根目录下创建 .env 文件
```js
HOST=localhost
PORT=3000
MONGOOSE_URL=mongodb://localhost:27017/test
```
根目录下 app.js 下引入 dotenv 并使用
```js
require('dotenv').config({ path: '.env' })
// 使用
console.log(process.env.HOST) // localhost
console.log(process.env.PORT) // 3000
console.log(process.env.MONGOOSE_URL) // mongodb://localhost:27017/test
```
使用 dotenv 可以让我们免于在各个文件中引入配置文件，也可以很好的解决敏感信息的泄漏，利于后期代码维护，快用起来吧！
