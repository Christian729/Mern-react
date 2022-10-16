// import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";



const Number = (props) => {
    const {word} = useParams();
    return(
        <div >
            {
                isNaN(word)?
                null
                :
                <h1>The number is:{word}</h1>
            }
            
        </div> 
    )
}

export default Number;