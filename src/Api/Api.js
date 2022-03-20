import * as axios from "axios";

const instance = axios.create({
    withCredentials: false,
    baseURL: `https://api.pokemontcg.io/v2/`,
    headers: {
        "API-KEY": "23f9b782-c3a0-4db0-9226-4b0f37c76fb9"
    }
});

export const pokemonsAPI = {
    getPokemon(currentPage = 1, pageSize = 250) {
        return instance.get(`cards?page=${currentPage}&count=${pageSize}`)
            .then(card => {
                return card.data;
            });
    }
}