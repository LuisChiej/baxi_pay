import Baxi from "../baxi";

export default class AirtimeService {
    #baxi: Baxi;
    
    constructor(baxi: Baxi) {
        this.#baxi = baxi;
    }

    async buy(params: AirtimeRequest): Promise<any> {
        const url: ServiceUrl<AirtimeRequest> = 'services/airtime/request'

        const response = await this.#baxi.axios().post(url, params)
        if(response.status === 200) return response.data;
        return null;
    }
}