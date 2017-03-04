// used to expose hyperscript
export interface HyperScript {
    /** Creates an HTML element */
    (tagName: string, ...args: any[]): HTMLElement;
    /** Cleans up any event handlers created by this hyperscript context */
    cleanup(): void;
    /** Creates a new hyperscript context */
    context(): HyperScript;
}

const h: HyperScript = require('hyperscript'); // h; // module.exports = h;
// export default h;

module.exports = h;
module.exports.h = h;
