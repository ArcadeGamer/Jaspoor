
import { UUID } from "crypto";
import { SimCardStatus } from "./simCardStatus";

export class SimCard {
  id: number;
  iccid: UUID;
  status: SimCardStatus;
  ratePlanId: number;
  dataUsage: number;

  constructor(params: {
    id: number,
    iccid: UUID,
    status: SimCardStatus,
    ratePlanId: number,
    dataUsage: number,
  }) {
    this.id = params.id;
    this.iccid = params.iccid;
    this.status = params.status;
    this.ratePlanId = params.ratePlanId;
    this.dataUsage = params.dataUsage;
  }
}