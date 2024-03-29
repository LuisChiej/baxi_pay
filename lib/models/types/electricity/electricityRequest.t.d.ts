import { ElectricityServiceType } from "./electricityService.t";
export type ElectricityRequest = {
    service_type: ElectricityServiceType;
    account_number: string;
    amount?: number;
    metadata?: string;
    phone?: string;
    agentId?: string;
    agentReference?: string;
};
//# sourceMappingURL=electricityRequest.t.d.ts.map