import {createContext} from "react";

const loadDentists = () => {
    const localDentists = localStorage.getItem("dentists");
    if (!localDentists) {
        const getData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const parsedResponse = await response.json();
            localStorage.setItem("dentists", JSON.stringify(parsedResponse));
            console.log("API called!");
            return parsedResponse;
        }
        return getData();
    } else {
        console.log("local dentists were found!");
        return JSON.parse(localDentists);
    }
}

function getFavoriteDentists() {
    return JSON.parse(localStorage.getItem("favorite-dentists")) || [];
}

export const isFavorite = (id) => {
    let favoriteDentists = getFavoriteDentists();
    return favoriteDentists.some(dentist => dentist.id === id);
}

const addFavoriteDentist = (d) => {
    let favoriteDentists = getFavoriteDentists();
    if (isFavorite(d.id)) return;
    favoriteDentists.push({name: d.name, username: d.username, id: d.id, email: d.email, phone: d.phone, website: d.website})
    localStorage.setItem("favorite-dentists", JSON.stringify(favoriteDentists));
    return favoriteDentists;
};
const removeFavoriteDentist = (id) => {
    let favoriteDentists = getFavoriteDentists();
    let index = favoriteDentists.findIndex(dentist => dentist.id = id)
    favoriteDentists.splice(index, 1);
    localStorage.setItem("favorite-dentists", JSON.stringify(favoriteDentists));
    return favoriteDentists;
};
const clearFavorites = () => {
    localStorage.removeItem("favorite-dentists");
    return [];
};
export const reducer = async (state, action) => {
    switch (action.type) {
        case "SWITCH_THEME":
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            };
        case "ADD_FAVORITE":
            return {
                ...state,
                favorites: addFavoriteDentist(action.payload)
            };
        case "REMOVE_FAVORITE":
            return {
                ...state,
                favorites: removeFavoriteDentist(action.payload)
            }
        case "CLEAR_FAVORITES":
            return {
                ...state,
                favorites: clearFavorites()
            }
        default:
            return state;
    }
};

const data = loadDentists();
export const initialState = {
    theme: "dark",
    dentists: data,
    favs: getFavoriteDentists()
}

export const ContextGlobal = createContext();



