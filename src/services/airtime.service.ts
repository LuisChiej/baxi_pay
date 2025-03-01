import { AirtimeRequest } from '../models/types/airtime/airtimeRequest.t';
import { ServiceUrl } from '../models/types/serviceUrl';
import Baxi from '..';

export default class AirtimeService {
  #baxi: Baxi;

  constructor(baxi: Baxi) {
    this.#baxi = baxi;
  }

  async buy(params: AirtimeRequest): Promise<any> {
    const url: ServiceUrl<AirtimeRequest> = 'services/airtime/request';

    try {
      const response = await this.#baxi.axios().post(url, params);
      if (response.status === 200) return response.data;
      return null;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}
