## API
```js
var formidable=require('koa2-formidable')
var Koa = require('koa')
var app =new Koa()
app.use(formidable(opt));
```
opt is [formidable](https://github.com/felixge/node-formidable) options.

## Use

```js
var {body,files}=ctx.request;
``` 