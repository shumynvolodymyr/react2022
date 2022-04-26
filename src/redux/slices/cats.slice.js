import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cats: []
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
        }
    }
});

export default catsSlice.reducer;
export const {
    addCat,
    deleteCat
} = catsSlice.actions;
