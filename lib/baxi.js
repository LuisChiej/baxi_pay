"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Baxi_instances, _Baxi_onInit;
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const lodash_1 = require("lodash");
const airtime_service_1 = __importDefault(require("services/airtime.service"));
const cable_service_1 = __importDefault(require("services/cable.service"));
const databundle_service_1 = __importDefault(require("services/databundle.service"));
const electricity_service_1 = __importDefault(require("./services/electricity.service"));
class Baxi {
    constructor(apiKey, environment) {
        _Baxi_instances.add(this);
        this._environment = 'development';
        this._apiKey = apiKey;
        this._environment = environment;
        const instance = axios_1.default.create({
            baseURL: this._environment === 'development' ? 'https://api.staging.baxibap.com' : 'https://api.baxibap.com'
        });
        instance.defaults.headers.common['x-api-key'] = this._apiKey;
        instance.defaults.headers.post['Content-Type'] = 'application/json';
        instance.defaults.headers.common['Accept'] = 'application/json';
        this._axios = instance;
        __classPrivateFieldGet(this, _Baxi_instances, "m", _Baxi_onInit).call(this);
        this.electricity = new electricity_service_1.default(this);
        this.cable = new cable_service_1.default(this);
        this.airtime = new airtime_service_1.default(this);
        this.dataBundle = new databundle_service_1.default(this);
    }
    axios() {
        return this._axios;
    }
}
exports.default = Baxi;
_Baxi_instances = new WeakSet(), _Baxi_onInit = function _Baxi_onInit() {
    if ((0, lodash_1.isEmpty)(this._apiKey))
        throw new Error('API KEY is required');
};
