import {combineReducers, configureStore} from '@reduxjs/toolkit';
import catsSlice from './slices/cats.slice';
import dogsSlice from './slices/dogs.slice';

const rootReducers = combineReducers({
    cats: catsSlice.reducer,
    dogs: dogsSlice.reducer
});

export const store = configureStore({
    reducer: rootReducers
});
