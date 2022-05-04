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
    getPokemons(currentPage, pageSize) {
        return instance.get(`cards?page=${currentPage}&count=${pageSize}`)
            .then(card => {
                return card.data;
            });
    }
}

// получение офильтрованного массива с карточками покемонов
export const filterPokemonsAPI = {
    getFilterPokemons(currentFilterPage, pageFilterSize, searchPokemon) {
        if (searchPokemon.pokemonName && !searchPokemon.pokemonType && !searchPokemon.pokemonSubtype) {
            // если есть только имя  
            return instance.get(`cards?q=name:${searchPokemon.pokemonName}`)
                .then(card => {
                    return card.data;
                });
        } else if (searchPokemon.pokemonType && !searchPokemon.pokemonSubtype) {
            // если есть только тип
            return instance.get(`cards?q=types:${searchPokemon.pokemonType}`)
                .then(card => {
                    return card.data;
                });
        } else if (searchPokemon.pokemonSubtype && !searchPokemon.pokemonType) {
            // если есть только подтип
            return instance.get(`cards?q=subtypes:${searchPokemon.pokemonSubtype}`)
                .then(card => {
                    return card.data;
                });
        } else if (searchPokemon.pokemonType && searchPokemon.pokemonSubtype) {
            // если есть тип и подтип
            return instance.get(`cards?q=types:${searchPokemon.pokemonType}%20subtypes:${searchPokemon.pokemonSubtype}`)
                .then(card => {
                    return card.data;
                });
        } else if (!searchPokemon.pokemonType && !searchPokemon.pokemonSubtype && !searchPokemon.pokemonName) {
            // если параметры поска пусты
            return instance.get(`cards?q=name:${'Pikachu'}`)
                .then(card => {
                    return card.data;
                });
        }
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