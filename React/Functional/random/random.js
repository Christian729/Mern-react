
const handleChange = (e)=> {

if (e.target.name === 'name'){
    if ((e.target.value).trim().length < 2){
        setState({...state,name:{value:e.target.value,error:"Name must be at least 2 characters long"}})
        setError(true)
    }else{
        
    }
}

}

