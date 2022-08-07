type ElectricityRequest = {
    service_type: ElectricityServiceType,
    account_number: string,
    amount?: number,
    metadata?: string
    phone?: string,
    agentId?: string,
    agentReference?: string
}