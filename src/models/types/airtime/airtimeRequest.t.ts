type AirtimeRequest = {
    phone: string,
    amount: number,
    service_type: Providers,
    plan: 'prepaid',
    agentId?: string,
    agentReference?: string
}