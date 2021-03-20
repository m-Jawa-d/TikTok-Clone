import React, { useState } from 'react'
import { useStateValue } from './StateProvider'
import Add from './Images/add.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TotalPrice from './TotalPrice';
// var id;
// var prices;
function BasketValues() {
    const [{ basket },dispatch] = useStateValue();


    const REMOVE_FROM_BASKET=(itemId)=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:itemId,
            // item:basket.item.id,
            
        })
    }

    // console.log(basket)
    return (
        <>
        <div className=' addprice'>
        <div>
            <img className='  img-fluid' src={Add} alt="add pic"/>
            {basket?.length===0? (<><h2 className=' fw-bold text-secondary px-2 pt-2'>Your Shopping Basket is Empty</h2><p className='px-2'>Please add some product to your basket to proceed further 🧺</p></>): (<h2 className=' fw-bold pt-2 px-2 text-secondary'>Your Shopping Basket</h2>)}
            {basket.map((val) => {
                return (
                    <>
                        <div className="d-flex ">
                            <div className='d-flex px-2 py-3 buton_Parent  '>
                                <img className={val.isLarge ? 'basket_photo img-fluid' : 'basket_photo img-fluid'} src={val.img} alt="BackWall" />
                            </div>
                            <div className=" px-4 pt-5">
                                <h5> {val.title}</h5>
                                <strong>
                                    {val.price}$
                                </strong>
                                <div className="d-flex">
                                    {Array(val.rating)
                                        .fill()
                                        .map((_) => <p >⭐</p>)}

                                </div>
                                <button onClick={()=>{return REMOVE_FROM_BASKET(val.id)}} className='buton_basket '>Remove from Basket</button>
                            </div>
                        </div>
                    </>
                )
            })
            }
        </div>
        <div className='  TotalPrice'>
        <TotalPrice/>
        </div>
        </div>
       
        </>
    )
}

export default BasketValues
