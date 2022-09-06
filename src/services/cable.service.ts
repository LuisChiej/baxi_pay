import { CableProviders } from "models/enums/cableProviders";
import { CableRequest } from "models/types/cable/cableRequest.t";
import { ServiceUrl } from "models/types/serviceUrl";
import Baxi from "../baxi";

export default class CableService {
    #baxi: Baxi;
    
    constructor(baxi: Baxi) {
        this.#baxi = baxi;
    }

    async getCableProducts(provider: CableProviders): Promise<ServiceResponse | null> {
        const url: ServiceUrl<CableRequest> = 'services/multichoice/list'

        const response = await this.#baxi.axios().post(url, {
            service_type: provider
        })
        if(response.status === 200) return response.data;
        return null;
    }

    async getAddons(params: CableRequest): Promise<ServiceResponse | null> {
        const url: ServiceUrl<CableRequest> = 'services/multichoice/addons'

        const data: CableRequest = {
            service_type: params.service_type,
            product_code: params.product_code
        }

        const response = await this.#baxi.axios().post(url, data)
        if(response.status === 200) return response.data;
        return null;
    }

    async buy(params: CableRequest): Promise<ServiceResponse | null> {
        const url: ServiceUrl<CableRequest> = 'services/multichoice/request'

        const response = await this.#baxi.axios().post(url, params)
        if(response.status === 200) return response.data;
        return null;
    }
}