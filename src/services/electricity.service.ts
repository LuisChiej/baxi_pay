import { ElectricityRequest } from '../models/types/electricity/electricityRequest.t';
import { ServiceUrl } from '../models/types/serviceUrl';
import Baxi from '..';
import { AxiosError } from 'axios';
import { ServiceResponse } from '../models/types/serviceResponse';

export default class ElectricityService {
  readonly #baxi: Baxi;
  readonly _statuses = [201, 200];
  readonly _failedStatues = [400, 503, 500, 404];

  constructor(baxi: Baxi) {
    this.#baxi = baxi;
  }

  async verify(params: ElectricityRequest): Promise<ServiceResponse | null> {
    const url: ServiceUrl<ElectricityRequest> = 'services/electricity/verify';

    const data = {
      service_type: params.service_type,
      account_number: params.account_number,
    };

    try {
      const response = await this.#baxi.axios().post(url, data);
      if (this._statuses.includes(response.status)) return response.data;
      return null;
    } catch (e: unknown) {
      console.log(e);
      if (e instanceof AxiosError) {
        if (e.response) {
          if (this._failedStatues.includes(e.response?.status)) {
            return e.response.data;
          }
        }
      }
      return null;
    }
  }

  async buy(params: ElectricityRequest): Promise<ServiceResponse | null> {
    const url: ServiceUrl<ElectricityRequest> = 'services/electricity/request';

    try {
      const response = await this.#baxi.axios().post(url, params);
      if (this._statuses.includes(response.status)) return response.data;
      return null;
    } catch (e) {
      console.log(e);
      if (e instanceof AxiosError) {
        if (e.response) {
          if (this._failedStatues.includes(e.response?.status)) {
            return e.response.data;
          }
        }
      }
      return null;
    }
  }

  async requery(reference: string): Promise<ServiceResponse | null> {
    const url = `services/superagent/transaction/requery?agentReference=${reference}`;

    try {
      const response = await this.#baxi.axios().get(url);
      if (this._statuses.includes(response.status)) return response.data;
      return null;
    } catch (e) {
      console.log(e);
      if (e instanceof AxiosError) {
        if (e.response) {
          if (this._failedStatues.includes(e.response?.status)) {
            return e.response.data;
          }
        }
      }
      return null;
    }
  }
}
