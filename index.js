'use strict'

var formidable = require('formidable')

module.exports = function (opt) {
    return async function (ctx, next) {
        const form = new formidable.IncomingForm()
        for (const key in opt) {
            form[key] = opt[key]
        }
        await new Promise((reslove, reject) => {
            form.parse(ctx.req, (err, fields, files) => {
                if (err) {
                    reject(err)
                } else {
                    ctx.request.body = fields
                    ctx.request.files = files
                    reslove()
                }
            })
        })
        await next()
    }
}