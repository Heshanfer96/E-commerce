import React from 'react'
import './products.css'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../../StateProvider';

function Products({title,image,price,rating,id}) {

    const [{ basket },dispatch]= useStateValue();

    // console.log(basket)

    const AddtoBasket =()=>{
        dispatch({
            type: "ADD_TO_BASKET",
            iteam:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }

        })
    }

    return (
        <div className='product' key={id}>
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <strong><AttachMoneyIcon/></strong>
                    <small>{price}</small>
                </p>
                <div className="product_ratings">
                    {Array(rating).fill().map(( iteam )=>(
                        <p><StarIcon className='product_rating_star' /></p>
                    ) )}
                </div>
            </div>
            <img className='product_image' src={image} alt="watch" />
            <button className='add_cart_button' onClick={AddtoBasket}>add to Basket</button>
            
        </div>
    )
}

export default Products
