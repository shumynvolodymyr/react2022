import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    dogs: [],
    dataToUpdate: false
};

const dogsSlice = createSlice({
    name: 'dogsSlice',
    initialState,
    reducers: {
        addDog: (state, action) => {
            const [lastId] = state.dogs.slice(-1);
            const id = lastId ? lastId.id + 1 : 1;
            const {name} = action.payload;
            state.dogs.push({id, name})
        },
        deleteDog: (state, action) => {
            const index = state.dogs.findIndex(value => value.id === action.payload.id);
            state.dogs.splice(index, 1)
        },
        updateDogInputValue: (state, action) => {
            const {id, name} = action.payload;
            state.dataToUpdate = {id, name};
        },
        updateDog: (state, action) => {
            const index = state.dogs.findIndex(value => value.id === state.dataToUpdate.id);
            state.dogs[index].name = action.payload.name;
            state.dataToUpdate = false;
        }
    }
});

export default dogsSlice;
export const {
    addDog,
    deleteDog,
    updateDog,
    updateDogInputValue
} = dogsSlice.actions;
