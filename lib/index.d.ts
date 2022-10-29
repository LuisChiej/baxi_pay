import { AxiosInstance } from "axios";
import AirtimeService from "./services/airtime.service";
import CableService from "./services/cable.service";
import DataBundleService from "./services/databundle.service";
import ElectricityService from "./services/electricity.service";
import AccountService from "./services/account.service";
export default class Baxi {
    private _apiKey;
    private _environment;
    private _axios;
    electricity: ElectricityService;
    cable: CableService;
    airtime: AirtimeService;
    dataBundle: DataBundleService;
    account: AccountService;
    constructor(apiKey: string, environment: 'development' | 'production');
    axios(): AxiosInstance;
}
//# sourceMappingURL=index.d.ts.map