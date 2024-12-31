import { ElectricityRequest } from "../models/types/electricity/electricityRequest.t";
import Baxi from "..";
export default class ElectricityService {
    #private;
    readonly _statuses: number[];
    constructor(baxi: Baxi);
    verify(params: ElectricityRequest): Promise<ServiceResponse | null>;
    buy(params: ElectricityRequest): Promise<any>;
    requery(reference: string): Promise<any>;
}
//# sourceMappingURL=electricity.service.d.ts.map