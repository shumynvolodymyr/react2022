import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {carAction} from '../../redux';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import './CarForm.css';

export default function CarForm() {
    const navigate = useNavigate();
    let {carForUpdate, formErrors} = useSelector(({cars}) => cars);
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
            reset();
        } else {
            const {payload} = await dispatch(carAction.createCar({car: newCar}));
            if (!payload) {
                reset();
            }
        }
        navigate('/cars');
    }

    return (
        <form className={'car-form-box'} onSubmit={handleSubmit(saveData)}>
            <input className={'input-box'} type="text" placeholder={'model'} {...register('model')}/>
            {formErrors.model && <span className={'error'}>{formErrors.model[0]}</span>}
            <input className={'input-box'} type="number" placeholder={'price'} {...register('price')}/>
            {formErrors.price && <span className={'error'}>{formErrors.price[0]}</span>}
            <input className={'input-box'} type="number" placeholder={'year'} {...register('year')}/>
            {formErrors.year && <span className={'error'}>{formErrors.year[0]}</span>}
            <button>{carForUpdate ? 'UPDATE' : 'CREATE'}</button>
        </form>
    );
}
