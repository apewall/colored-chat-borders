export {};

declare global {
    interface LenientGlobalVariableTypes {
        game: never;
        canvas: never;
    }
}
