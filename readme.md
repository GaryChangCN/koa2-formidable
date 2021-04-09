## GET

```js
npm install koa2-formidable --save
```

## API

```js
const formidable = require('koa2-formidable')
const Koa = require('koa')
const app = new Koa()
app.use(formidable (opt))

```
opt is [formidable](https://github.com/felixge/node-formidable) options.

## Use

```js
let { body, files } = ctx.request
``` 
## LICENSE
[MIT](./LICENSE)
