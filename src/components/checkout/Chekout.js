import React from 'react'
import './Checkout.css'
import Subtotal from '../subtotal/subtotal'
import CheckoutProducts from '../CheckoutProducts/CheckoutProducts'
import { useStateValue } from '../../StateProvider'

function Chekout() {

const[{basket,user},dispatch]=useStateValue()
console.log(basket)

    return (
        <div>
            <div className="checkout">
                <div className="chechout_right">
                    <img className='checkout_top_image' src="https://wp.disruptiveadvertising.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png" alt="advertisement" />
                <div className="buket_list">

                        <h2>Helloo...{user?.email}</h2>
                        <h1 className='Bucket_heading'>Your Shoping Bucket</h1>
                        
                        {basket.map((iteam)=>{
                            return (
                                <CheckoutProducts id={iteam.id} title={iteam.title} image={iteam.image} price={iteam.price} rating={iteam.rating} />
                            )
                        })}
                        
                       

                </div>
                </div>

                <div className="checkout_left">
                   <Subtotal/>
                </div>
            </div>
        </div>
    )
}

export default Chekout
