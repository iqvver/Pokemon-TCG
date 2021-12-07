import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://api.pokemontcg.io/v2/',
    headers: {
        "API-KEY": "3ac4aa01-dde2-4d54-95bd-6e0322ff582f"
    }
});

/*export const pokeCardAPI = {
    getPokeCard(page = 1, pageSize = 10) {
        return card.find('card/id')
        .then(card => {
            console.log(card.name)
        });
    },
}*/

export const authAPI = {
   me() { 
       return instance.get(`auth/me`);
    },
    login(email, password) {
    return instance.post(`auth/login`, {email, password});
    },
    logout(){
        return instance.delete(`auth/login`);
    }
}