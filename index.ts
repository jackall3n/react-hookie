export type HookieReturn<T> = {
    [P in keyof T]: {
        _: T[P],
        set: any
    }
}

const useHookie = <T>(configuration: T, reactUseState: any): HookieReturn<T> => {
    return Object.keys(configuration as any).reduce((config: any, key: string) => {
        const initial_value = (configuration as any)[key];
        const [value, set] = reactUseState(initial_value);

        return {
            ...config,
            [key]: {
                _:value,
                set
            }
        };
    }, {} as any)
};

export default useHookie;
