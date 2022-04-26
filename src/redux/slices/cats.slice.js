import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cats: [],
    dataToUpdate: false
};

const catsSlice = createSlice({
    name: 'catsSlice',
    initialState,
    reducers: {
        addCat: (state, action) => {
            const [lastId] = state.cats.slice(-1);
            const id = lastId ? lastId.id + 1 : 1;
            const {name} = action.payload;
            state.cats.push({id, name})
        },
        deleteCat: (state, action) => {
            const index = state.cats.findIndex(value => value.id === action.payload.id);
            state.cats.splice(index, 1)
        },
        updateCatInputValue: (state, action) => {
            const {id, name} = action.payload;
            state.dataToUpdate = {id, name};
        },
        updateCat: (state, action) => {
            const index = state.cats.findIndex(value => value.id === state.dataToUpdate.id);
            state.cats[index].name = action.payload.name;
            state.dataToUpdate = false;
        }
    }
});

export default catsSlice;
export const {
    addCat,
    deleteCat,
    updateCat,
    updateCatInputValue
} = catsSlice.actions;
