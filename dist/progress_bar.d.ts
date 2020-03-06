export declare class ProgressBar {
    static animationDuration: number;
    static readonly defaultCSS: string;
    readonly stylesheetElement: HTMLStyleElement;
    readonly progressElement: HTMLDivElement;
    hiding: boolean;
    trickleInterval?: number;
    value: number;
    visible: boolean;
    show(): void;
    hide(): void;
    setValue(value: number): void;
    installStylesheetElement(): void;
    installProgressElement(): void;
    fadeProgressElement(callback: () => void): void;
    uninstallProgressElement(): void;
    startTrickling(): void;
    stopTrickling(): void;
    trickle: () => void;
    refresh(): void;
    createStylesheetElement(): HTMLStyleElement;
    createProgressElement(): HTMLDivElement;
}
//# sourceMappingURL=progress_bar.d.ts.map