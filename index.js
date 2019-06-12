"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var useHookie = function (configuration, reactUseState) {
    return Object.keys(configuration).reduce(function (config, key) {
        var _a;
        var initial_value = configuration[key];
        var _b = reactUseState(initial_value), value = _b[0], set = _b[1];
        return __assign({}, config, (_a = {}, _a[key] = {
            _: value,
            set: set
        }, _a));
    }, {});
};
exports.default = useHookie;
