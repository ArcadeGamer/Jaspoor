

export class RatePlan {
  id: number;
  name: string;
  monthlyCost: number;
  dataLimit: number;

  constructor(params: {
    id: number,
    name: string,
    monthlyCost: number,
    dataLimit: number,
  }) {
    this.id = params.id;
    this.name = params.name;
    this.monthlyCost = params.monthlyCost;
    this.dataLimit = params.dataLimit;
  }
}