"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ElectricityService_baxi;
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class ElectricityService {
    constructor(baxi) {
        _ElectricityService_baxi.set(this, void 0);
        this._statuses = [201, 200];
        __classPrivateFieldSet(this, _ElectricityService_baxi, baxi, "f");
    }
    verify(params) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'services/electricity/verify';
            const data = {
                "service_type": params.service_type,
                "account_number": params.account_number
            };
            try {
                const response = yield __classPrivateFieldGet(this, _ElectricityService_baxi, "f").axios().post(url, data);
                if (this._statuses.includes(response.status))
                    return response.data;
                return null;
            }
            catch (e) {
                if (e instanceof axios_1.AxiosError) {
                    return (_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.data;
                }
                console.log(e);
                return null;
            }
        });
    }
    buy(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'services/electricity/request';
            try {
                const response = yield __classPrivateFieldGet(this, _ElectricityService_baxi, "f").axios().post(url, params);
                if (this._statuses.includes(response.status))
                    return response.data;
                return null;
            }
            catch (e) {
                console.log(e);
                return null;
            }
        });
    }
    requery(reference) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `services/superagent/transaction/requery?agentReference=${reference}`;
            try {
                const response = yield __classPrivateFieldGet(this, _ElectricityService_baxi, "f").axios().get(url);
                if (this._statuses.includes(response.status))
                    return response.data;
            }
            catch (e) {
                console.log(e);
                return null;
            }
        });
    }
}
exports.default = ElectricityService;
_ElectricityService_baxi = new WeakMap();
