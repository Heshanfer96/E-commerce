import React from 'react'
import './payement.css'
import { Link } from 'react-router-dom'
import { useStateValue } from "../../StateProvider"
import CheckoutProducts from "../CheckoutProducts/CheckoutProducts"

function Payement() {

    const[{basket,user},payload]=useStateValue()

    return (
        <div className='payement'>
            <div className="payement_container">
                <h1>checkout (<a > <Link to='/checkout'>{basket.length}</Link>Iteams </a>) </h1>
            </div>

            <div className="payement_section">
                <div className="payement_title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payement_address">
                    <p>{user?.email}</p>
                    <p>no : 32/10 church road,</p>
                    <p>Eladaniya, Kadawatha</p>
                </div>
            </div>

            <div className="payement_section">
                <div className="payement_title">
                    <h3>Review iteams that you selected</h3>
                </div>
                <div className="payement_iteams">
                    {basket.map(iteam =>(
                        <CheckoutProducts id={iteam.id} title={iteam.title} image={iteam.image} price={iteam.price} rating={iteam.rating} />
                    ))}
                </div>
            </div>

            <div className="payement_section">
                <div className="payement_title">
                    <h3>Payement method</h3>
                </div>
                <div className="payement_details">
                    {/* strip magic */}
                </div>
            </div>

            
        </div>
    )
}

export default Payement
