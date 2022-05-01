import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {carService} from '../../services';

const initialState = {
    cars: [],
    carForUpdate: false,
    formErrors: {},
};

const getCars = createAsyncThunk(
    'getCars',
    async () => {
        try {
            const {data} = await carService.getCars();
            return data;
        } catch (e) {
            console.error(e);
        }
    }
);

const deleteCar = createAsyncThunk(
    'deleteCar',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteCarById(id);
            dispatch(deleteById({id}));
        } catch (e) {
            console.error(e);
        }
    }
);
const updateCar = createAsyncThunk(
    'updateCar',
    async ({id, car}, {dispatch, rejectWithValue}) => {
        try {
            await carService.updateCarById(id, car);
            dispatch(updateById({id, car}));
        } catch (e) {
            return rejectWithValue({formErrors: e.response.data});
        }
    }
);

const createCar = createAsyncThunk(
    'createCar',
    async ({car}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await carService.createCar(car);
            dispatch(createNewCar(data));
        } catch (e) {
            return rejectWithValue({formErrors: e.response.data});
        }
    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        deleteById: (state, action) => {
            const {id} = action.payload;
            const index = state.cars.findIndex(car => car.id === id);
            state.cars.splice(index, 1);
        },
        updateById: (state, action) => {
            const {id, car} = action.payload;
            const index = state.cars.findIndex(value => value.id === id);
            state.cars[index] = {id, ...car};
            state.carForUpdate = false;
        },
        createNewCar: (state, action) => {
            const newCar = action.payload;
            state.cars.push(newCar);
        },
        setCarForUpdate: (state, action) => {
            const {car} = action.payload;
            state.carForUpdate = car
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCars.fulfilled, ((state, action) => {
                state.cars = action.payload;
            }))
            .addCase(createCar.rejected, ((state, action) => {
                const {formErrors} = action.payload;
                state.formErrors = formErrors;
            }))
            .addCase(updateCar.rejected, ((state, action) => {
                const {formErrors} = action.payload;
                state.formErrors = formErrors;
            }))
    }
})

const {reducer: carReducer, actions: {deleteById, updateById, createNewCar, setCarForUpdate}} = carSlice;
const carAction = {getCars, deleteCar, updateCar, createCar, setCarForUpdate};

export {carReducer, carAction};
