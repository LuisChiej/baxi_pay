import { Providers } from '../models/enums/providers';
import { DataBundleRequest } from '../models/types/databundle/dataBundleRequest.t';
import Baxi from '..';
export default class DataBundleService {
    #private;
    constructor(baxi: Baxi);
    getDataBundles(provider: Providers): Promise<any>;
    buy(params: DataBundleRequest): Promise<any>;
}
//# sourceMappingURL=databundle.service.d.ts.map