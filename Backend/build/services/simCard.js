"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimCardService = void 0;
const orm_1 = require("../db/orm");
class SimCardService {
    constructor() {
        this.orm = new orm_1.Orm();
    }
    getSimCards() {
        return { simCards: this.orm.getSimCards(), count: 4, pageNumber: 1 };
    }
    updateSimCard(params) {
        return this.orm.updateSimcardRatePlan(params.simCardId, params.ratePlanId);
    }
}
exports.SimCardService = SimCardService;
