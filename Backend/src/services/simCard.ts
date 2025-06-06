import { Orm } from "../db/orm";
import { SimCard } from "../entities/simCard";

export class SimCardService {
  orm: Orm;
  
  constructor() {
    this.orm = new Orm();
  }

  getSimCards(): { simCards: SimCard[], count: number, pageNumber: number } {
    return { simCards: this.orm.getSimCards(), count: 4, pageNumber: 1 };
  }

  updateSimCard(params: { simCardId: number; ratePlanId: number; }) {
    return this.orm.updateSimcardRatePlan(params.simCardId, params.ratePlanId);
  }
}