import * as formidable from 'formidable'
import * as Koa from 'koa'

declare module "koa" {
    interface Request {
        body: any
        files: any
    }
}



/**
 * @param opt formidable incomingfrom options https://github.com/felixge/node-formidable
 */
export default function (opt?: formidable.IncomingForm): Koa.Middleware {
    return async function (ctx: Koa.Context, next) {
        const form = new formidable.IncomingForm()
    
        if (opt) {
            Object.assign(form, opt)
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