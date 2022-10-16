import { useParams } from "react-router-dom"

const Colored = (props) => {
    const {word, color, bgCol } = useParams();
    return(
        <div>
            <h1>
            {
                isNaN(word)?
                <h1 style={
                    color?
                    {color: color, backgroundColor: bgCol}
                    : null
                }>The word is: { word }</h1>
                :
                <h1 style={
                    color?
                    {color: color, backgroundColor: bgCol}
                    : null
                }>The number is:{word}</h1> 
                // i wanted to make it even so that both a number and 
                // words can display color as well
            }
            </h1>
        </div>
        
    )
}

export default Colored;