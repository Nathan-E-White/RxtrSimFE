declare const Not: (x: boolean) => boolean;
declare const NullQ: (o: HTMLElement | null) => boolean;
declare const ValidQ: (o: HTMLElement | null) => boolean;
declare const ActiveQ: (o: HTMLElement | null) => boolean;
declare class ClassActive {
    static deactivate(e: HTMLElement): void;
    static activate(e: HTMLElement): void;
}
declare class HiddenOrVisible {
    static HiddenQ(e: HTMLElement): boolean;
    static VisibleQ(e: HTMLElement): boolean;
}
declare class HiddenAttribute {
    static hide(e: HTMLElement): void;
    static reveal(e: HTMLElement): void;
}
declare function main(): void;
//# sourceMappingURL=index.d.ts.map