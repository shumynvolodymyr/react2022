import {ADD_CAT, ADD_DOG, DELETE_CAT, DELETE_DOG} from "../constants";

export const reducer = (state, action) => {
    const {dogs, cats} = state;
    const {type, payload} = action;

    switch (type) {
        case ADD_CAT:
            const [lastCat] = cats.slice(-1);
            const catId = lastCat ? lastCat.id + 1 : 1;
            return {...state, cats: [...cats, {id: catId, name: payload}]};
        case ADD_DOG:
            const [lastDog] = dogs.slice(-1);
            const dogId = lastDog ? lastDog.id + 1 : 1;
            return {...state, dogs: [...dogs, {id: dogId, name: payload}]};
        case DELETE_CAT:
            let findIndex = cats.findIndex(value => value.id === payload);
            cats.splice(findIndex, 1);
            return {...state, cats: [...cats]};
        case DELETE_DOG:
            let index = dogs.findIndex(value => value.id === payload);
            dogs.splice(index, 1);
            return {...state, dogs: [...dogs]};
        default:
            return state;
    }
};
