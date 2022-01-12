import React from 'react'
import backgroundImage from '../../images/HomeBackground.jpg'
import './Home.css'
import Products from '../products/products'

function Home() {

    return (
        <div className='home'>
            <div className="background_image">
                <img className='background_image_iteam' src={backgroundImage} alt="background" />

                <div className="product_row">
                    <Products 
                        title='Fitbit Versa 3 Health & Fitness Smartwatch with GPS, 24/7 Heart Rate, Alexa Built-in, 6+ Days Battery,'
                        image= "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="watch"
                         price={250}
                         rating={2}
                        id={1}
                         />
                    <Products title='Keurig K-Mini Coffee Maker, Single Serve K-Cup Pod Coffee Brewer, 6 to 12 oz. Brew Sizes, Poppy Red'
                        image="https://m.media-amazon.com/images/I/61cBtlt7NIL._AC_UL480_FMwebp_QL65_.jpg" alt="watch"
                        price={77.79}
                        rating={4}
                        id={2}/>

                </div>
                <div className="product_row">
                    <Products 
                        title='Jabra Elite 75t Earbuds – True Wireless Earbuds with Charging Case, Titanium Black – Active Noise Cancelling Bluetooth Earbuds with'
                        image="https://m.media-amazon.com/images/I/71M3yV-WjUL._AC_UL480_FMwebp_QL65_.jpg" alt="watch"
                        price={149.99}
                        rating={4}
                        id={3}
                         />
                    <Products title='First Aid Only All-Purpose Essentials Soft-Sided First Aid Kit, Blue, 298 Pieces'
                        image="https://m.media-amazon.com/images/I/71oS56rcp0L._AC_UL480_FMwebp_QL65_.jpg" alt="watch"
                        price={51, 765}
                        rating={3}
                        id={4}/>
                    <Products title='Fitbit Versa 3 Health & Fitness Smartwatch with GPS, 24/7 Heart Rate, Alexa Built-in, 6+ Days Battery, Black/Black, One Size (S & L Bands)'
                        image="https://m.media-amazon.com/images/I/61ZXwnqqOuS._AC_UL480_FMwebp_QL65_.jpg" alt="watch"
                        price={208.00 }
                        rating={5}
                        id={5}/>

                </div>
                <div className="product_row">
                    <Products title='Amazon Basics External Hard Drive Portable Carrying Case'
                        image="https://m.media-amazon.com/images/I/81CNNi09RxS._AC_UL480_FMwebp_QL65_.jpg" alt="watch"
                        price={9.99}
                        rating={4}
                        id={6}/>

                </div>
            </div>
           
        </div>
    )
}

export default Home
