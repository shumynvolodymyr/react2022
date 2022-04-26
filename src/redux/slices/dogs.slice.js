import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    dogs: []
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
        }
    }
});

export default dogsSlice.reducer;
export const {
    addDog,
    deleteDog
} = dogsSlice.actions;
