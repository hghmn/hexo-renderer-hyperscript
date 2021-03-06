import * as h from './h';
const DOCTYPE = '<!DOCTYPE HTML>\n';

export interface HexoData {
    path: string;
    text: string;
}
export interface HexoOptions {
    page: any;
}

function renderer(data: HexoData, options: HexoOptions) {
    // TODO: deal with no path passed in from hexo case:
    // https://hexo.io/api/renderer.html#Synopsis
    if (!data.path) {
        console.error('no path given for data, defaulting to raw text', data);
        return data.text;
    }

    // FIXME: require in the path in a cleaner way
    var pageFunc = require(data.path);

    // Make this a real-ish html page coming back
    return DOCTYPE + pageFunc(options.page, options).outerHTML;
};

// Register the renderer with hexo
hexo.extend.renderer.register('js', 'html', renderer, true);

export default {
    h,
    renderer
};
