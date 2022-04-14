import {useForm} from 'react-hook-form';

import './CarForm.css'
import {carService} from '../../services';
import {useEffect, useState} from 'react';

const CarForm = ({setNewCar, carForUpdate, setCarForUpdate, setUpdatedCar}) => {
    const [error, setError] = useState({});
    const {register, reset, handleSubmit, setValue} = useForm();
    const onSubmit = async (car) => {
        try {
            if (carForUpdate) {
                const {data} = await carService.updateCar(carForUpdate.id, car);
                setUpdatedCar(data);
                setCarForUpdate(false);
            } else {
                await carService.createCar(car);
                setNewCar(car);
            }
            reset();
            setError({});
        } catch (e) {
            setError(e.response.data);
        }
    };

    useEffect(() => {
        if (carForUpdate) {
            const {model, price, year} = carForUpdate;
            setValue('model', model);
            setValue('price', price);
            setValue('year', year);
        }
    }, [carForUpdate, setValue]);

    return (
        <form className={'car-form-box'} onSubmit={handleSubmit(onSubmit)}>
            <div className={'input-box'}><label><input type="text" {...register('model')}
                                                       placeholder={'Model'}/></label></div>
            {error.model && <span className={'error'}>{error.model[0]}</span>}
            <div className={'input-box'}><label><input type="number" {...register('price')}
                                                       placeholder={'Price'}/></label></div>
            {error.price && <span className={'error'}>{error.price[0]}</span>}

            <div className={'input-box'}><label><input type="number" {...register('year')}
                                                       placeholder={'Year'}/></label></div>
            {error.year && <span className={'error'}>{error.year[0]}</span>}
            <button>{carForUpdate ? 'UPDATE' : 'SAVE'}</button>
        </form>
    )
}


export {CarForm};
