"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const ratePlan_1 = require("./router/ratePlan");
const koa_router_1 = __importDefault(require("koa-router"));
const simCard_1 = require("./router/simCard");
const koa_body_1 = __importDefault(require("koa-body"));
const koa_cors_1 = __importDefault(require("koa-cors"));
const app = new koa_1.default();
app.use((0, koa_cors_1.default)());
app.use((0, koa_body_1.default)());
app.use(new ratePlan_1.RatePlanRouter(new koa_router_1.default()).router.routes());
app.use(new simCard_1.SimCardRouter(new koa_router_1.default()).router.routes());
app.listen(8000);
