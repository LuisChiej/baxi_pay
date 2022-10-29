"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const airtime_service_1 = __importDefault(require("./services/airtime.service"));
const cable_service_1 = __importDefault(require("./services/cable.service"));
const databundle_service_1 = __importDefault(require("./services/databundle.service"));
const electricity_service_1 = __importDefault(require("./services/electricity.service"));
const account_service_1 = __importDefault(require("./services/account.service"));
class Baxi {
    constructor(apiKey, environment) {
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
        // this.#onInit()
        this.electricity = new electricity_service_1.default(this);
        this.cable = new cable_service_1.default(this);
        this.airtime = new airtime_service_1.default(this);
        this.dataBundle = new databundle_service_1.default(this);
        this.account = new account_service_1.default(this);
    }
    // #onInit(): void {
    //     if(isEmpty(this._apiKey)) throw new Error('API KEY is required')
    // }
    axios() {
        return this._axios;
    }
}
exports.default = Baxi;
