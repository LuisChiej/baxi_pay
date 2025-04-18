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
var _CableService_baxi;
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class CableService {
    constructor(baxi) {
        _CableService_baxi.set(this, void 0);
        __classPrivateFieldSet(this, _CableService_baxi, baxi, "f");
    }
    getCableProducts(provider) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'services/multichoice/list';
            const response = yield __classPrivateFieldGet(this, _CableService_baxi, "f").axios().post(url, {
                service_type: provider,
            });
            if (response.status === 200)
                return response.data;
            return null;
        });
    }
    getAddons(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'services/multichoice/addons';
            const data = {
                service_type: params.service_type,
                product_code: params.product_code,
            };
            const response = yield __classPrivateFieldGet(this, _CableService_baxi, "f").axios().post(url, data);
            if (response.status === 200)
                return response.data;
            return null;
        });
    }
    verify(params) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const url = 'services/namefinder/query';
            const data = {
                service_type: params.service_type,
                account_number: params.smartcard_number,
            };
            try {
                const response = yield __classPrivateFieldGet(this, _CableService_baxi, "f").axios().post(url, data);
                if (response.status === 200)
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
            const url = 'services/multichoice/request';
            const response = yield __classPrivateFieldGet(this, _CableService_baxi, "f").axios().post(url, params);
            if (response.status === 200)
                return response.data;
            return null;
        });
    }
}
_CableService_baxi = new WeakMap();
exports.default = CableService;
