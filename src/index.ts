export type HookieReturn<T> = {
    [P in keyof T]: {
        _: T[P],
        set: any
    }
}

export interface IHookie<T, X> {
    _: T,
    onSet(value: T, state: X): void;
}

export type HookieValue<T, X> = {
    _: T,
    onSet: (value: T, state: X) => void;
}

export type HookieConfiguration = {
    [key: string] : number | HookieValue<number, any>
}

const useHookie = <HookieConfiguration>(configuration: HookieConfiguration, reactUseState: any): HookieReturn<HookieConfiguration> => {
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
