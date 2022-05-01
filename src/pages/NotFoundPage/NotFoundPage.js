import {useNavigate} from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate('/cars')}>GO HOME</button>
            <h1>NotFoundPage</h1>
        </div>
    );
};

export {NotFoundPage};
