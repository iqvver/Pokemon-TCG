import * as axios from "axios";

export const getPokemon = (currentPage = 1, pageSize = 250) => {
        
        return axios.get(`https://api.pokemontcg.io/v2/cards?page=${currentPage}&count=${pageSize}`,
            {
                withCredentials: true
            })
    }

