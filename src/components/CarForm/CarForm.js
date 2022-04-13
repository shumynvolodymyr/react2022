import {useForm} from 'react-hook-form';

import './CarForm.css'
import {carService} from '../../services';
import {useEffect} from 'react';

const CarForm = ({setNewCar, carForUpdate, setCarForUpdate, setUpdatedCar}) => {
    const {register, reset, handleSubmit, setValue} = useForm();
    const onSubmit = async (car) => {
        try {
            if (carForUpdate) {
                const {data} = await carService.updateCar(carForUpdate.id, car);
                setUpdatedCar(data);
                setCarForUpdate(false);
                reset();
            } else {
                await carService.createCar(car);
                setNewCar(car);
                reset();
            }
        } catch (e) {

        }
    };

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    }, [carForUpdate]);

    return (
        <form className={'car-form-box'} onSubmit={handleSubmit(onSubmit)}>
            <div className={'input-box'}><label><input type="text" {...register('model')}
                                                       placeholder={'Model'}/></label></div>
            <div className={'input-box'}><label><input type="number" {...register('price')}
                                                       placeholder={'Price'}/></label></div>
            <div className={'input-box'}><label><input type="number" {...register('year')}
                                                       placeholder={'Year'}/></label></div>
            <button>{carForUpdate ? 'UPDATE' : 'SAVE'}</button>
        </form>
    )
}


export {CarForm};
