import * as bodyParser from 'body-parser';
import * as express from 'express';
import { ThriftServerExpress } from '@creditkarma/thrift-server-express';

import { CommodityService, Commodity } from './codegen';

const PORT = 8080;

const app = express();

const serviceHandlers: CommodityService.IHandler<express.Request> = {
  addCommodity(commodity: Commodity, context?: express.Request): Commodity {
    return commodity;
  },
};

app.use(
  '/thrift',
  bodyParser.raw(),
  ThriftServerExpress<CommodityService.Processor>({
    serviceName: 'commodity-service',
    handler: new CommodityService.Processor(serviceHandlers)
  })
);

app.get('/control', (req: express.Request, res: express.Response) => {
  res.send('PASS');
});

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`);
});
