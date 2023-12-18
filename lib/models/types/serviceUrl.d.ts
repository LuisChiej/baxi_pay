import { Service } from "../../models/enums/service";
import { CableRequest } from "./cable/cableRequest.t";
import { DataBundleRequest } from "./databundle/dataBundleRequest.t";
import { ElectricityRequest } from "./electricity/electricityRequest.t";
export type ServiceUrl<T> = `services/${Service}/${T extends ElectricityRequest ? 'verify' | 'request' : T extends DataBundleRequest ? 'bundles' | 'request' : T extends CableRequest ? 'list' | 'addons' | 'request' : 'request'}`;
//# sourceMappingURL=serviceUrl.d.ts.map