import {useForm} from 'react-hook-form';

import './CarForm.css'
import {carService} from '../../services';

const CarForm = ({setNewCar}) => {
    const {register, reset, handleSubmit} = useForm();

    const onSubmit = (data) => {
        carService.createCar(data);
        setNewCar(data);
        reset();
    };

    return (
        <form className={'car-form-box'} onSubmit={handleSubmit(onSubmit)}>
            <div className={'input-box'}><label><input type="text" {...register('model')}
                                                       placeholder={'Model'}/></label></div>
            <div className={'input-box'}><label><input type="number" {...register('price')}
                                                       placeholder={'Price'}/></label></div>
            <div className={'input-box'}><label><input type="number" {...register('year')}
                                                       placeholder={'Year'}/></label></div>
            <button>SAVE</button>
        </form>
    );
};

export {CarForm};
