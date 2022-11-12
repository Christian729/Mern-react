import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = (props) => {
    const {productList, setProductList} = props;// to make our data process fast

    const {product, setProduct} = props; 
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        }) 
            .then(res=>{
                console.log(res);
                console.log(res.data);
                setProductList([...productList, res.data]) // this is where we set the data to pull up fast
                setProduct([...product, res.data]);
            })
            .catch(err=>console.log(err))
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label>
                <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label>
                <input type="number" onChange={(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label>
                <input type="text" onChange={(e)=>setDescription(e.target.value)}/>
            </p>
            <input type='submit'/>
        </form>
    )
}
export default ProductForm;