"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var useHookie = function (configuration, reactUseState) {
    return Object.keys(configuration).reduce(function (config, key) {
        var initial_value = configuration[key];
        var _a = reactUseState(initial_value), value = _a[0], set = _a[1];
        config[key] = {
            _: value,
            set: set
        };
    }, {});
};
exports.default = useHookie;
