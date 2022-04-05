import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';
import Comments from './components/Comments/Comments';
import './App.css';

function App() {
    return (
        <div className="wrapper">
            <Users/>
            <Posts/>
            <Comments/>
        </div>
    );
}

export default App;
