import React from 'react';
import './index.css';

const ProductItem = (props)=>(
    <li key={props.product.id}>
        <img alt={props.product.name} src={props.product.imgUrl}/>
        {props.product.description}
    </li>
)

const ProductList = (props) => {
    return (
        <div>
            {
                props.list != null &&
                <ul className='product-list'>
                    {props.list.map(products=>(
                        <ProductItem product={products}/>    
                    ))}
                </ul>
            }
        </div>
    )
}

export default ProductList;
