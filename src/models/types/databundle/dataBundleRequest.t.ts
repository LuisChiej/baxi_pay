import { AirtimeRequest } from "../airtime/airtimeRequest.t"

export type DataBundleRequest = Omit<AirtimeRequest, 'plan'> & {
    datacode: string
}