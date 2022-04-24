import {Cats, Dogs, Header} from "../../components";
import './MainLayout.css'

const MainLayout = () => {
    return (
        <div className={'wrap'}>
            <Header/>
            <Dogs/>
            <Cats/>
        </div>
    );
};

export {MainLayout};
