import {
  createHttpClient
} from '@creditkarma/thrift-client'

import { CoreOptions } from 'request'

import { CommodityService } from './codegen'

// Create Thrift client
const thriftClient: CommodityService.Client<CoreOptions> = createHttpClient(CommodityService.Client, {
  serviceName: 'commodity-service',
  hostName: 'localhost', // The host of the service to connect to
  port: 8080, // The port of the service to connect to
  requestOptions: {} // CoreOptions to pass to Request
})
