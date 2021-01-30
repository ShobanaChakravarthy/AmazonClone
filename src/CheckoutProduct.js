import React from 'react'
import {useStateValue} from "./StateProvider"
import "./CheckoutProduct.css"

function CheckoutProduct({image,title,id,price,rating}) {
    const[{basket},dispatch]=useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image"/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
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
                <button onClick={removeFromBasket} className="checkoutProduct__button">Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
