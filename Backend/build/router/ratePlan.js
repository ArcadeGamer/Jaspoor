"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatePlanRouter = void 0;
class RatePlanRouter {
    constructor(router) {
        this.initializeRoutes = () => {
            this.router.get('/rateplan/:id', (ctx) => {
                this.getRatePlan(ctx);
            });
            this.router.get('/rateplan', (ctx) => {
                this.getRatePlans(ctx);
            });
        };
        this.getRatePlan = (ctx) => {
            // ctx.params.id
            ctx.status = 200;
            ctx.body = {
            // TODO : The rateplan
            };
        };
        this.getRatePlans = (ctx) => {
            ctx.status = 200;
            ctx.body = {
            // TODO : The rateplans + pagination
            };
        };
        this.router = router;
        this.initializeRoutes();
    }
    ;
}
exports.RatePlanRouter = RatePlanRouter;
