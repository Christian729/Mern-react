import { Link } from "react-router-dom";
import Home from "./home";
import { useParams } from "react-router-dom";

const Word = (props) =>{
    const {word} = useParams();

    return(
        <div>
            {
                isNaN(word)?
                <h1>The word is: { word }</h1>
                :
                <h1>The number is:{word}</h1> // at first I experimented by
                //seeing if i could make this number section be null
                // but it didnt work, so we went along with the solution video 
                // as it seemed like the most efficient option
            }
            
            <Link to={'/home'} element={<Home />}> Go home</Link>
        </div>
    )
}

export default Word;