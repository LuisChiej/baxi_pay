import Baxi from "../baxi";

export default class ElectricityService {
    #baxi: Baxi;
    
    constructor(baxi: Baxi) {
        this.#baxi = baxi;
    }

    async verify(params: ElectricityRequest): Promise<ServiceResponse | null> {
        const url: ServiceUrl<ElectricityRequest> = 'services/electricity/verify'

        const data = {
            "service_type": params.service_type,
            "account_number": params.account_number
        }

        const response = await this.#baxi.axios().post(url, data)
        if(response.status === 200) return response.data;
        return null;
    }

    async buy(params: ElectricityRequest): Promise<any> {
        const url: ServiceUrl<ElectricityRequest> = 'services/electricity/request'

        const response = await this.#baxi.axios().post(url, params)
        if(response.status === 200) return response.data;
        return null;
    }
}