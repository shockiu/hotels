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
exports.addPagination = void 0;
var addPagination = function (optionsSearch, limit, page) {
    if (limit !== undefined && page !== undefined) {
        optionsSearch = __assign(__assign({}, optionsSearch), { limit: parseInt(limit), offset: parseInt(page) * parseInt(limit) });
        return optionsSearch;
    }
    return optionsSearch;
};
exports.addPagination = addPagination;
