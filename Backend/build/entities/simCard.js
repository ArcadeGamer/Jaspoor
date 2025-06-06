"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimCard = void 0;
class SimCard {
    constructor(params) {
        this.id = params.id;
        this.iccid = params.iccid;
        this.status = params.status;
        this.ratePlanId = params.ratePlanId;
        this.dataUsage = params.dataUsage;
    }
}
exports.SimCard = SimCard;
