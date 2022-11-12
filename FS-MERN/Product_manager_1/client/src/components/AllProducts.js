import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const AllProducts = (props) => {
    const {productList, setProductList} = props;
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log(res.data);
            setProductList(res.data);
        })
        .catch((err)=> console.log(err))
    }, []); 
    return (
        <div>
            <h1>Display all </h1>
            {
                productList.map((product, index)=>{
                    return <div key={product._id}>
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                    </div>
                })
            }

        </div>
    )
}

export default AllProducts;