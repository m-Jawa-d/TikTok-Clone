import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useStateValue } from './StateProvider';
function Product({ id, title, rating, price, img, isLarge }) {
    const [state, dispatch] = useStateValue(); 

    const ADD_TO_CART = () => {
        // console.log('hi');
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id, title, rating, price, img, isLarge
            }
        })
    }

    return (

        <div class="card border-0" style={{ width: '100%' }}>
            <div className=" shadow-lg p-3">
                <p>{title}</p>
                <strong>
                    {price}$
            </strong>
                <div className="d-flex">
                    {Array(rating)
                        .fill()
                        .map((_) => <p >⭐</p>)}

                </div>
                <div className='d-flex buton_Parent  flex-column'>
                    <img className={isLarge ? 'photoL img-fluid' : 'photo img-fluid'} src={img} alt="BackWall" />
                    <button onClick={ADD_TO_CART} className='buton my-4'>Add to Basket</button>
                </div>
            </div>

        </div>

    )
}

export default Product;

// const n=[]
// for(var i=1;i<=star;i++){
//     n.push(i)
// }

// {n.map((no)=>{
//     return '⭐';
// })}
