import React from 'react';
const AddProduct = () =>{
    return(
        <div className="add-product-main">
            <h1>Add Product</h1>
            <div className="add-product-form">
                <form>
                    <input type="text" placeholder="Product Name"/>
                    <input type="text" placeholder="Product Description"/>
                    <input type="number" placeholder="Product Price"/>
                    <input type="file" placeholder="Product Image"/>
                    <button type="submit">Add Product</button>
                </form>
            </div>
        </div>
    )
}
export default AddProduct