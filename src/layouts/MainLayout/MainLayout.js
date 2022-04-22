import {Outlet} from "react-router-dom";

import {Cats, Dogs, Header} from "../../components";
import './MainLayout.css'

const MainLayout = ({dispatch, state: {cats, dogs}}) => {
    return (
        <div className={'wrap'}>
            <Header/>
            <Cats dispatch={dispatch} cats={cats}/>
            <Dogs dispatch={dispatch} dogs={dogs}/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};