import axios, { AxiosInstance } from "axios";
import { isEmpty } from "lodash";
import AirtimeService from "./services/airtime.service";
import CableService from "./services/cable.service";
import DataBundleService from "./services/databundle.service";
import ElectricityService from "./services/electricity.service";
import AccountService from "./services/account.service";

export default class Baxi {
    private _apiKey: string;
    private _environment: 'development' | 'production' = 'development';
    private _axios: AxiosInstance;

    public electricity: ElectricityService;
    public cable: CableService;
    public airtime: AirtimeService;
    public dataBundle: DataBundleService;
    public account: AccountService;

    constructor(apiKey: string, environment: 'development' | 'production') {
        this._apiKey = apiKey;
        this._environment = environment;
        const instance = axios.create({
            baseURL: this._environment === 'development' ? 'https://api.staging.baxibap.com' : 'https://api.baxibap.com'
        })
        instance.defaults.headers.common['x-api-key'] = this._apiKey;
        instance.defaults.headers.post['Content-Type'] = 'application/json';
        instance.defaults.headers.common['Accept'] = 'application/json';
        this._axios = instance;
        // this.#onInit()

        this.electricity = new ElectricityService(this)
        this.cable = new CableService(this)
        this.airtime = new AirtimeService(this)
        this.dataBundle = new DataBundleService(this)
        this.account = new AccountService(this)
    }

    // #onInit(): void {
    //     if(isEmpty(this._apiKey)) throw new Error('API KEY is required')
    // }

    public axios(): AxiosInstance {
        return this._axios;
    }
}