import {useForm} from 'react-hook-form';
import {useEffect} from 'react';
import {joiResolver} from '@hookform/resolvers/joi';

import './CarForm.css'
import {carService} from '../../services';
import {carValidator} from '../../validators';

const CarForm = ({setNewCar, carForUpdate, setCarForUpdate, setUpdatedCar}) => {
    const {
        register,
        reset,
        handleSubmit,
        setValue,
        formState: {errors}
    } = useForm({resolver: joiResolver(carValidator), mode: "onTouched"});
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
        } catch (e) {
            console.error(e.response.data);
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
            {errors.model && <span className={'error'}>{errors.model.message}</span>}
            <div className={'input-box'}><label><input type="number" {...register('price')}
                                                       placeholder={'Price'}/></label></div>
            {errors.price && <span className={'error'}>{errors.price.message}</span>}

            <div className={'input-box'}><label><input type="number" {...register('year')}
                                                       placeholder={'Year'}/></label></div>
            {errors.year && <span className={'error'}>{errors.year.message}</span>}
            <button>{carForUpdate ? 'UPDATE' : 'SAVE'}</button>
        </form>
    )
}

export {CarForm};
