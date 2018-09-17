"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const formidable = require("formidable");
/**
 * @param opt formidable incomingfrom options https://github.com/felixge/node-formidable
 */
function default_1(opt) {
    return function (ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const form = new formidable.IncomingForm();
            if (opt) {
                Object.assign(form, opt);
            }
            yield new Promise((reslove, reject) => {
                form.parse(ctx.req, (err, fields, files) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        ctx.request.body = fields;
                        ctx.request.files = files;
                        reslove();
                    }
                });
            });
            yield next();
        });
    };
}
exports.default = default_1;
