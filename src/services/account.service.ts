import Baxi from "..";

export default class AccountService {
    #baxi: Baxi;
    
    constructor(baxi: Baxi) {
        this.#baxi = baxi;
    }

    async getBalance(): Promise<any> {
        const url: string = 'services/superagent/account/balance';

        try {
            const response = await this.#baxi.axios().get(url);
            if(response.status === 200) return response.data;
        } catch (e) {
            return null;
        }
    }
}