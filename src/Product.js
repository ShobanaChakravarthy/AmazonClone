import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'


function Product({id,title,image,price,rating}) {
    const[{basket},dispatch]=useStateValue();
    const addToBasket = () => {
        //Add items to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                // id: id,
                // title: title,
                // image: image,
                // price: price,
                // rating: rating
                // if the key name is equal to value name
                id,
                title,
                image,
                price,
                rating 
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {/* loop thru the number and display a star */}
                    {/* array of value passed then fill empty and map thru it to print it 
                    _ indicates the value doesnt matter
                    */}
                    {
                        Array(rating)
                        .fill()
                        .map((_)=>(
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt="product__image" className="product__image"/>
            <button className="product__basket" onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
