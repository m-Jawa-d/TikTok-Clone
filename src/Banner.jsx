import React from 'react'
import Baner from './Images/Banner.jpg';
import Watch from './Images/Watch.jpg';
import Game from './Images/Game.jpg';
import Laptop from './Images/Laptop.jpg';
import Alexa from './Images/Alexa.jpg';
import RTX from './Images/RTX.jpg';
import backwall from './Images/backwall.jpg';
import samsungMoniter from './Images/Samsung-moniter.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Product from './Product';
function Banner() {
    return (<>
        <div className=' container-fluid  container-lg '>
            <div className='banner0 img-fluid'>
                <img className='img-fluid  banner' src={Baner} alt="Banner_Img" />
            </div>
        </div>
        <div className='row w-100    px-5 top_position'>
            <div className='d-flex col-md-6 col-12 col-lg-6 pb-4 '>
                <Product id={1} title={'Watch by apple with extra guts and design'}
                    rating={2} img={Watch} price={1030} />

                {/* id, title, rating,img,price */}
            </div>
            <div className='d-flex col-lg-6 pb-4 col-md-6 col-12 '>

                <Product id={2} title={'Remote controll for gaming ,checkout our new product'}
                    rating={4} img={Game} price={500} />
                {/* id, title, rating,img,price */}
            </div>
        </div>

        <div className='row w-100   px-5 '>
            <div className='d-flex col-md-4 col-12 col-lg-4 pb-4 '>
                <Product id={3} title={'Laptop by samsung ,with extended battery life'}
                    rating={5} img={Laptop} price={2000} />

                {/* id, title, rating,img,price */}
            </div>
            <div className='d-flex col-lg-4 pb-4 col-md-4 col-12 '>

                <Product id={4} title={'Cyberpower Xtreme Desktop Gaming PC'}
                    rating={4} img={RTX} price={4000} />
                {/* id, title, rating,img,price */}
            </div>
            <div className='d-flex col-lg-4 pb-4 col-md-4 col-12 '>

                <Product id={5} title={'Alexa Amazon orignal product'}
                    rating={5} img={Alexa} price={300} />
                {/* id, title, rating,img,price */}
            </div>
        </div>


        <div className='row w-100     px-5 '>
            <div className='d-flex col-md-12 col-12 col-lg-12 pb-4 '>
                <Product isLarge id={6} title={'Samsung-49-Inch-CHG90-144Hz-Curved-Gaming-Monitor-1'}
                    rating={4} img={samsungMoniter} price={3500} />

                {/* id, title, rating,img,price */}
            </div>

        </div>
    </>
    )
}

export default Banner
