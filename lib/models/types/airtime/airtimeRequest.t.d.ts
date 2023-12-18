import { Providers } from "../../../models/enums/providers";
export type AirtimeRequest = {
    phone: string;
    amount: number;
    service_type: Providers;
    plan: 'prepaid';
    agentId?: string;
    agentReference?: string;
};
//# sourceMappingURL=airtimeRequest.t.d.ts.map