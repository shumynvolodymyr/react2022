import {useEffect, useState} from 'react';
import {getShip} from '../../services/fetch.api';
import LaunchingShip from '../LaunchingShip/LaunchingShip';
import './LaunchingShips.css'

export default function LaunchingShips() {
    const [state, setState] = useState([]);
    useEffect(() => {
        getShip().then(value => setState(value));
    }, []);

    return (
        <div className={'launch-ships'}>
            {state.map((item, index) => {
                if (item.launch_year !== '2020') {
                    return <LaunchingShip key={index} item={item}/>
                }
            })}
        </div>
    );
}
