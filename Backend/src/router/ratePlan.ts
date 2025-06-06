import koaRouter from "koa-router";

export class RatePlanRouter {
  router: koaRouter;

  constructor(router: koaRouter) {
    this.router = router;
    this.initializeRoutes();
  };

  initializeRoutes = () => {
    this.router.get('/rateplan/:id', (ctx) => {
      this.getRatePlan(ctx);
      
    });

    this.router.get('/rateplan', (ctx) => {
      this.getRatePlans(ctx);
    });
  };

  getRatePlan = (ctx: any) => {
    // ctx.params.id
    ctx.status = 200;
    ctx.body = {
      // TODO : The rateplan
    }
  };

  getRatePlans = (ctx: any) => {
    ctx.status = 200;
    ctx.body = {
      // TODO : The rateplans + pagination
    }
  };
}