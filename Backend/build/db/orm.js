"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orm = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// Stand-in for a class that handles database access
// Simplified for lack of time
class Orm {
    constructor() {
        this.getSimCards = () => {
            const simCards = (JSON.parse(fs_1.default.readFileSync(path_1.default.resolve(__dirname, "./simCardData.json"), 'utf8'))).simcards;
            return simCards;
        };
        this.updateSimcardRatePlan = (simCardId, ratePlanId) => {
            const simCards = this.getSimCards();
            const index = simCards.findIndex((x) => x.id === simCardId);
            simCards[index].ratePlanId = ratePlanId;
            fs_1.default.writeFileSync("./simCardData.json", JSON.stringify(simCards), 'utf8');
            return simCards[index];
        };
        this.getRatePlans = () => {
        };
    }
}
exports.Orm = Orm;
