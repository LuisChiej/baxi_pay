import Baxi from "../baxi";

export default class DataBundleService {
    #baxi: Baxi;
    
    constructor(baxi: Baxi) {
        this.#baxi = baxi;
    }

    async getDataBundles(provider: Providers): Promise<any> {
        const url: ServiceUrl<DataBundleRequest> = 'services/databundle/bundles'

        const response = await this.#baxi.axios().post(url, {
            service_type: provider
        })
        if(response.status === 200) return response.data;
        return null;
    }

    async buy(params: DataBundleRequest): Promise<any> {
        const url: ServiceUrl<DataBundleRequest> = 'services/databundle/request'

        const response = await this.#baxi.axios().post(url, params)
        if(response.status === 200) return response.data;
        return null;
    }
}