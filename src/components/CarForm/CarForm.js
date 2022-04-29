import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {carAction} from '../../redux';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';

export default function CarForm() {
    let {carForUpdate} = useSelector(({cars}) => cars);
    const dispatch = useDispatch();
    const {register, reset, handleSubmit, setValue} = useForm();

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    }, [carForUpdate, setValue])

    const saveData = async (newCar) => {
        if (carForUpdate) {
            await dispatch((carAction.updateCar({id: carForUpdate.id, car: newCar})))
        } else {
            await dispatch(carAction.createCar({car: newCar}));
        }
        reset();
    }

    return (
        <form onSubmit={handleSubmit(saveData)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="number" placeholder={'price'} {...register('price')}/>
            <input type="number" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate ? 'UPDATE' : 'CREATE'}</button>
        </form>
    );
}
