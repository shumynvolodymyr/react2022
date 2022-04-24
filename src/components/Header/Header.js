import './Header.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
            <div className={'header'}>
                <NavLink to={'/dogs'}>Dogs</NavLink>
                <NavLink to={'/cats'}>Cats</NavLink>
            </div>
    );
};

export {Header};
