import { CableProviders } from '../models/enums/cableProviders';
import { CableRequest } from '../models/types/cable/cableRequest.t';
import { ServiceUrl } from '../models/types/serviceUrl';
import Baxi from '..';
import { AxiosError } from 'axios';
import { ServiceResponse } from '../models/types/serviceResponse';

export default class CableService {
  #baxi: Baxi;

  constructor(baxi: Baxi) {
    this.#baxi = baxi;
  }

  async getCableProducts(provider: CableProviders): Promise<ServiceResponse | null> {
    const url: ServiceUrl<CableRequest> = 'services/multichoice/list';

    const response = await this.#baxi.axios().post(url, {
      service_type: provider,
    });
    if (response.status === 200) return response.data;
    return null;
  }

  async getAddons(params: CableRequest): Promise<ServiceResponse | null> {
    const url: ServiceUrl<CableRequest> = 'services/multichoice/addons';

    const data: CableRequest = {
      service_type: params.service_type,
      product_code: params.product_code,
    };

    const response = await this.#baxi.axios().post(url, data);
    if (response.status === 200) return response.data;
    return null;
  }

  async verify(params: CableRequest): Promise<ServiceResponse | null> {
    const url = 'services/namefinder/query';

    const data = {
      service_type: params.service_type,
      account_number: params.smartcard_number,
    };

    try {
      const response = await this.#baxi.axios().post(url, data);
      if (response.status === 200) return response.data;
      return null;
    } catch (e: unknown) {
      if (e instanceof AxiosError) {
        return e?.response?.data;
      }
      console.log(e);
      return null;
    }
  }

  async buy(params: CableRequest): Promise<ServiceResponse | null> {
    const url: ServiceUrl<CableRequest> = 'services/multichoice/request';

    const response = await this.#baxi.axios().post(url, params);
    if (response.status === 200) return response.data;
    return null;
  }
}
