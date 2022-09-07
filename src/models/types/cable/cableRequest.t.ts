import { CableProviders } from "../../../models/enums/cableProviders"

export type CableRequest = {
    service_type: CableProviders
    smartcard_number?: string
    total_amount?: number
    product_code?: string
    addon_code?: Array<string>
    product_monthsPaidFor?: number
    agentId?: string
    agentReference?: string
}