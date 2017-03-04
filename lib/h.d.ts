export interface HyperScript {
    (tagName: string, ...args: any[]): HTMLElement;
    cleanup(): void;
    context(): HyperScript;
}
