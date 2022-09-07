import { ElectricityRequest } from "../models/types/electricity/electricityRequest.t";
import Baxi from "..";
export default class ElectricityService {
    #private;
    constructor(baxi: Baxi);
    verify(params: ElectricityRequest): Promise<ServiceResponse | null>;
    buy(params: ElectricityRequest): Promise<any>;
}
//# sourceMappingURL=electricity.service.d.ts.map