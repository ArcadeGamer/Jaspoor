"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimCardRouter = void 0;
const simCard_1 = require("../services/simCard");
// TODO : Create interface LocalRouter that has params router and initializeRoutes
class SimCardRouter {
    constructor(router) {
        this.initializeRoutes = () => {
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
        this.getSimCards = (ctx) => {
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
        this.updateSimCard = (ctx) => {
            var _a, _b;
            try {
                const simCard = this.service.updateSimCard({
                    simCardId: (_a = ctx.params) === null || _a === void 0 ? void 0 : _a.id,
                    ratePlanId: (_b = ctx.request.body) === null || _b === void 0 ? void 0 : _b.ratePlanId,
                });
                ctx.status = 200;
                ctx.body = {
                    simCard: simCard
                };
            }
            catch (e) {
                console.log(e);
                ctx.status = 400;
                ctx.body = {
                    error: e,
                };
            }
        };
        this.router = router;
        this.service = new simCard_1.SimCardService();
        this.initializeRoutes();
    }
    ;
}
exports.SimCardRouter = SimCardRouter;
