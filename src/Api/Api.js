import * as axios from "axios";

// базовый адрес запроса на сервис
const instance = axios.create({
    withCredentials: false,
    baseURL: `https://api.pokemontcg.io/v2/`,
    headers: {
        "API-KEY": "23f9b782-c3a0-4db0-9226-4b0f37c76fb9"
    }
});

// получение массива со всеми карточками покемонов
export const pokemonsAPI = {
    getPokemons(currentPage = 1, pageSize = 250 ) {
        return instance.get(`cards?page=${currentPage}&count=${pageSize}`)
            .then(card => {
                return card.data;
            });
    }
}

export const filterPokemonsNameAPI = {
    getFilterPokemonsName( currentPage = 1, pageSize = 250, pokemonName ) {
        return instance.get(`cards?q=name:${pokemonName}`)
            .then(card => {
                return card.data;
            });
    }
}

// переход в профиль выбранной карточки покемона
export const profilePokemonAPI = {
    getProfile(pokemonId) {
        return instance.get(`cards/` + pokemonId);
    }
}
// получение массива со всеми типами покемонов
export const typePokemonAPI = {
    getTypePokemon() {
        return instance.get(`types`).then(type => {
            return type.data;
        })
    }
}
// получение массива со всеми подтипами покемонов
export const subtypePokemonAPI = {
    getSubtypePokemon() {
        return instance.get(`subtypes`).then(subtype => {
            return subtype.data;
        })
    }
}