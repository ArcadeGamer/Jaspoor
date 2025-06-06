"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatePlan = void 0;
class RatePlan {
    constructor(params) {
        this.id = params.id;
        this.name = params.name;
        this.monthlyCost = params.monthlyCost;
        this.dataLimit = params.dataLimit;
    }
}
exports.RatePlan = RatePlan;
