import React, {useState} from 'react';
import useHookie, {HookieConfiguration} from "../src";

const configuration: HookieConfiguration = {
    test1: 1,
    test2: {
        _: 2,
        onSet(value, state) {
            state
        }
    },
    test3: 3
};

const {
    test1,
    test2,
    test3
} = useHookie(configuration, useState);
