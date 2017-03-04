"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var h = require("./h");
var DOCTYPE = '<!DOCTYPE HTML>\n';
function renderer(data, options) {
    if (!data.path) {
        console.error('no path given for data, defaulting to raw text', data);
        return data.text;
    }
    var pageFunc = require(data.path);
    return DOCTYPE + pageFunc(options.page, options).outerHTML;
}
;
hexo.extend.renderer.register('js', 'html', renderer, true);
exports.default = {
    h: h,
    renderer: renderer
};
