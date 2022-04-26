import {Form} from "../Form/Form";
import './Cats.css';
import {useSelector} from 'react-redux';
import {Cat} from '../Cat/Cat';

const Cats = () => {
    const {cats} = useSelector(state => state.cats);

    return (
        <div className={'cats-box'}>
            <Form name={'cats'}/>
            {cats.map(value => <Cat key={value.id} cat={value}/>)}
        </div>
    );
};

export {Cats};
