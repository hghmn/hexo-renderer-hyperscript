import * as h from './h';
export interface HexoData {
    path: string;
    text: string;
}
export interface HexoOptions {
    page: any;
}
declare var _default: {
    h: typeof h;
    renderer: (data: HexoData, options: HexoOptions) => string;
};
export default _default;
