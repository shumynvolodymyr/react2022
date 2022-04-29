import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {carReducer} from './slices';

const rootReducer = combineReducers({
    cars: carReducer
});

export const store = configureStore({reducer: rootReducer});
