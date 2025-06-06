import Koa from 'koa';
import { RatePlanRouter } from './router/ratePlan';
import koaRouter from "koa-router";
import { SimCardRouter } from './router/simCard';
import koaBody from 'koa-body'
import cors from 'koa-cors';

const app = new Koa();
app.use(cors());
app.use(koaBody());

app.use(new RatePlanRouter(new koaRouter()).router.routes());
app.use(new SimCardRouter(new koaRouter()).router.routes());

app.listen(8000);
