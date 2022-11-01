import React, { useState, useEffect } from "react";
import ProductForm from "../components/ProductForm";
import AllProducts from "../components/AllProducts";

const Main = (props) => {
    const [productList, setProductList] =useState([]); 
// we need these setters and getters to be consistent in here and the AllProducts file

    return (
        <div>
            <ProductForm productList={productList} setProductList={setProductList}/>
            <AllProducts productList={productList} setProductList={setProductList} />
        </div>
    )
}

export default Main;