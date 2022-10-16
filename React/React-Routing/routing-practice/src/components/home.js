import { Link } from 'react-router-dom';
import Word from './word';

const Home = (props) => {
    return(
        <div >
            <h1>Welcome!!</h1>
            <Link to={'/:word'} element={<Word/>}>Go to word</Link>
        </div>
    )
}

export default Home;