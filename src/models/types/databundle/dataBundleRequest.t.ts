type DataBundleRequest = Omit<AirtimeRequest, 'plan'> & {
    datacode: string
}