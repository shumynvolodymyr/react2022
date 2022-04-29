import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {carService} from '../../services';

const initialState = {
    cars: [],
    carForUpdate: false
};

const getCars = createAsyncThunk(
    'getCars',
    async () => {
        const {data} = await carService.getCars();
        return data;
    }
);

const deleteCar = createAsyncThunk(
    'deleteCar',
    async ({id}, {dispatch}) => {
        await carService.deleteCarById(id);
        dispatch(deleteById({id}));
    }
);
const updateCar = createAsyncThunk(
    'updateCar',
    async ({id, car}, {dispatch}) => {
        await carService.updateCarById(id, car);
        dispatch(updateById({id, car}));
    }
);

const createCar = createAsyncThunk(
    'createCar',
    async ({car}, {dispatch}) => {
        const {data} = await carService.createCar(car);
        dispatch(createNewCar(data));
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
    }
})

const {reducer: carReducer, actions: {deleteById, updateById, createNewCar, setCarForUpdate}} = carSlice;
const carAction = {getCars, deleteCar, updateCar, createCar, setCarForUpdate};

export {carReducer, carAction};
