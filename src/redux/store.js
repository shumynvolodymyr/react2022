import {combineReducers, configureStore} from '@reduxjs/toolkit';
import catsReducer from './slices/cats.slice';
import dogsReducer from './slices/dogs.slice';

const rootReducers = combineReducers({cats: catsReducer, dogs: dogsReducer});

export const store = configureStore({
    reducer: rootReducers
});
