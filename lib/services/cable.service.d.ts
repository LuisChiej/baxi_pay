import { CableProviders } from "../models/enums/cableProviders";
import { CableRequest } from "../models/types/cable/cableRequest.t";
import Baxi from "..";
export default class CableService {
    #private;
    constructor(baxi: Baxi);
    getCableProducts(provider: CableProviders): Promise<ServiceResponse | null>;
    getAddons(params: CableRequest): Promise<ServiceResponse | null>;
    buy(params: CableRequest): Promise<ServiceResponse | null>;
}
//# sourceMappingURL=cable.service.d.ts.map