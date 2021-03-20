import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LogInLogo from './Images/Amazon_logo.png';
import {NavLink} from 'react-router-dom';
import { useStateValue } from './StateProvider';
function LogInPage() {
    const [{user},dispatch]=useStateValue();
    const [email,upEmail]=useState();

    const thisVal=(obj)=>{
        upEmail(obj.target.value)
    }

    console.log(email);
    const CreateAccount=()=>{
        dispatch({type:'CreateAccount',
    Email:email,
    })
    }
    return (<>
        <div className='text-center'>
            <img className=' pt-5 LogInLogo' src={LogInLogo} alt="LogInLogo" />
        </div>
        <div className="pt-4">

            <div class="container">
                <div class="row">
                    <div class="col-12 ">
                    <div class="card border-2 shadow p-4 mx-auto" style={{ width: '19rem' }}>
                <form>
                    <h2 className='bold'>Sign-In</h2>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" onChange={thisVal} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div><button  type="submit" class="btn w-100 button_class1  text-dark btn-primary">Sign-In</button>
                    <p>
                        By Logging in will never share your data with thrid parties ,Asa tmhara sochna ha .
                </p>
                   {!email?<button disabled={!email} type="submit" class="btn w-100 button_class2 bold text-black border-secondary border-2 btn-light">Create your Amazon Account</button>: <NavLink  onClick={CreateAccount} exact to="/jawad//"><button disabled={!email} type="submit" class="btn w-100 button_class2 bold text-black border-secondary border-2 btn-light">Create your Amazon Account</button></NavLink>}
                </form>
            </div>
    </div>
                </div>
            </div>

            
        </div>
    </>
    )
}

export default LogInPage
