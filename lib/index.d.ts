import * as formidable from 'formidable';
import * as Koa from 'koa';
declare module "koa" {
    interface Request {
        body: any;
        files: any;
    }
}
/**
 * @param opt formidable incomingfrom options https://github.com/felixge/node-formidable
 */
export default function (opt?: formidable.IncomingForm): Koa.Middleware;
