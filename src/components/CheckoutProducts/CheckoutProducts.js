import React from 'react'
import './checkoutproducts.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../../StateProvider';


function CheckoutProducts({ id, title, image,price,rating}) {

    const[state,dispatch]=useStateValue()

    const removeiteam =()=>{

        dispatch({
            type:"REMOVE_ITEAM",
            id:id
        })
    }

    return (
        <div className='checkoutproducts' key={id}>
            <img className='checkoutproduct_image' src={image} alt="item" />

            <div className="chechoutproducts_info">
                <p className='checkoutproduct_title'>{title}</p>
                <p className="checkoutproduct_price">
                    <small> $ </small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct_ratings">
                    {Array(rating).fill().map(()=>
                        <p><StarIcon className='staricon' /></p>
                    )}
                </div>

                <button className='checkoutproduct_btn' onClick={()=>removeiteam()}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProducts
