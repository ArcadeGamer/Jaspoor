import Router from "koa-router";
import { SimCardService } from "../services/simCard";

// TODO : Create interface LocalRouter that has params router and initializeRoutes
export class SimCardRouter {
  router: Router;
  service: SimCardService; // TODO : Add to constructor

  constructor(router: Router) {
    this.router = router;
    this.service = new SimCardService();
    this.initializeRoutes();
  };

  initializeRoutes = () => {
    // TODO: Out of scope
    // this.router.get('/simcard/:id', (ctx) => {
    //     this.getSimCard(ctx);
    // });

    this.router.get('/simcard', (ctx) => {
      this.getSimCards(ctx);
    });

    this.router.put('/simcard/:id', (ctx) => {
      this.updateSimCard(ctx);
    });
  };

  getSimCards = (ctx: any) => {
    const { simCards, count, pageNumber } = this.service.getSimCards();
    ctx.body = {
      data: {
        simCards,
      },
      page: pageNumber,
      count
    };
    ctx.status = 200;
  };

  updateSimCard = (ctx: any) => {
    try {
      const simCard = this.service.updateSimCard({
        simCardId: ctx.params?.id,
        ratePlanId: ctx.request.body?.ratePlanId,
      });
      ctx.status = 200;
      ctx.body = {
        simCard: simCard
      }
    } catch (e) {
      console.log(e)
      ctx.status = 400;
      ctx.body = {
        error: e,
      }
    }
  };
}