export declare type HookieReturn<T> = {
    [P in keyof T]: {
        _: T[P];
        set: any;
    };
};
declare const useHookie: <T>(configuration: T, reactUseState: any) => HookieReturn<T>;
export default useHookie;
