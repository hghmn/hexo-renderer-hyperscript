// TODO: push this up to @types
// FIXME: add remainder of typings
interface Hexo {
    extend: {
        renderer: any;
    };
}

// Make available for importing into node
declare module "hexo" {
    export = hexo;
}
// Make available as global module
declare var hexo: Hexo;
