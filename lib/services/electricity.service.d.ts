import { ElectricityRequest } from '../models/types/electricity/electricityRequest.t';
import Baxi from '..';
import { ServiceResponse } from '../models/types/serviceResponse';
export default class ElectricityService {
    #private;
    readonly _statuses: number[];
    readonly _failedStatues: number[];
    constructor(baxi: Baxi);
    verify(params: ElectricityRequest): Promise<ServiceResponse | null>;
    buy(params: ElectricityRequest): Promise<ServiceResponse | null>;
    requery(reference: string): Promise<ServiceResponse | null>;
}
//# sourceMappingURL=electricity.service.d.ts.map