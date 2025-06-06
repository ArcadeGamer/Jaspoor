import axios from "axios";
import type { UUID } from "crypto";

export type SimCard = {
    id: number;
    iccid: UUID;
    status: SimCardStatus;
    ratePlanId: number;
    dataUsage: number;
}

export enum SimCardStatus {
    "ACTIVE",
    "INACTIVE",
    "UNKNOWN"
}

export const simCardApi = {
    api: axios.create({
        baseURL: "http://localhost:8000"
    }),

    async getSimCards(): Promise<SimCard[]> {
        const res = await this.api.get("simcard/");
        // TODO : Received pagination is ignored
        return res.data.data.simCards;
    },

    async updateSimCardRatePlan(id: number, ratePlanId: number) {
        await this.api.post(`simcard/${id}/`, {
            ratePlanId,
        });
    },
};
