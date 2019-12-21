struct Commodity {
  1: string country,
  2: string name,
  3: double variableOverhead
}

exception CommodityServiceException {
  1: required string message
}

service CommodityService {
  Commodity addCommodity(1: Commodity commodity) throws (1: CommodityServiceException exp)
}
