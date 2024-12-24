import { ElectricityRequest } from "../models/types/electricity/electricityRequest.t";
import { ServiceUrl } from "../models/types/serviceUrl";
import Baxi from "..";
import { AxiosError } from "axios";

export default class ElectricityService {
    readonly #baxi: Baxi;
    
    constructor(baxi: Baxi) {
        this.#baxi = baxi;
    }

    async verify(params: ElectricityRequest): Promise<ServiceResponse | null> {
        const url: ServiceUrl<ElectricityRequest> = 'services/electricity/verify'

        const data = {
            "service_type": params.service_type,
            "account_number": params.account_number
        }

        try {
            const response = await this.#baxi.axios().post(url, data)
            if(response.status === 200) return response.data;
            return null;
        } catch (e: unknown) {
            if(e instanceof AxiosError) {
                return e?.response?.data;
            }
            console.log(e)
            return null;
        }
    }

    async buy(params: ElectricityRequest): Promise<any> {
        const url: ServiceUrl<ElectricityRequest> = 'services/electricity/request'

        try {
            const response = await this.#baxi.axios().post(url, params)
            if(response.status === 200) return response.data;
            return null;
        } catch (e) {
            console.log(e)
            return null;
        }
    }

    async requery(reference: string): Promise<any> {
        const url = `services/superagent/transaction/requery?agentReference=${reference}`

        try {
            const response = await this.#baxi.axios().get(url)
            if(response.status === 200) return response.data;
        } catch (e) {
            console.log(e)
            return null;
        }
    }
}