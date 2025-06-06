import path from 'path';
import { SimCard } from '../entities/simCard';
import fs from 'fs'
// Stand-in for a class that handles database access
    // Simplified for lack of time
export class Orm {
    constructor() {}

    getSimCards = (): SimCard[] => {
        const simCards: SimCard[] = (JSON.parse(fs.readFileSync(path.resolve(__dirname, "./simCardData.json"), 'utf8'))).simcards;
        return simCards;
    }

    updateSimcardRatePlan = (simCardId: number, ratePlanId: number) => {
        const simCards = this.getSimCards();
        const index = simCards.findIndex((x) => x.id === simCardId);
        simCards[index].ratePlanId = ratePlanId;

        fs.writeFileSync("./simCardData.json", JSON.stringify(simCards), 'utf8');

        return simCards[index];
    }

    getRatePlans = () => {

    }
}