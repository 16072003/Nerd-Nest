import Auth from '../../components/Auth/Auth';
import axios from "axios";
import { useState } from 'react';
export default function Signup() {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        gender:'',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/signin', values)
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
    
    return <div><Auth> <div className='info'>
        <div className='infocontent'>
            <h1 id='heading'>Sign Up</h1>
            <form onSubmit={handleSubmit} className='signUpForm'>
                <div className='signUpInput'>
                    <input type='text' id="firstname" placeholder='first name' onChange={(e) => setValues({ ...values, firstname: e.target.value})}></input> 
                    <input type='text' id="lastname" placeholder='last name' onChange={(e) => setValues({ ...values, lastname: e.target.value})}></input> 
                </div>
                <input type="email" id="email" placeholder='Enter e-mail' onChange={(e) => setValues({ ...values, email: e.target.value})}></input>
                <div className='signUpInput'>
                    <input type='text' id="phone" placeholder='Enter Phone No.' onChange={(e) => setValues({ ...values, phone: e.target.value})}></input> 
                    <input type='text' id="gender" placeholder='Enter gender' onChange={(e) => setValues({ ...values, gender: e.target.value})}></input> 
                </div> 
                <input type='password' id="password" placeholder='Enter password' onChange={(e) => setValues({ ...values, password: e.target.value})}></input>
                <div className='buttonSignin'>
                    <button type='submit' id='signin'>SIGN UP</button> 
                </div>
            </form>   
        </div>
        </div>
        <div className='message'>
            <div id='msghead'>
                <h1>Create A Free<br></br> Account</h1>
            </div>
            <div id='msgfoot'>
                <p>Already have an account?</p>
                <button><a href='/signin'>SIGN IN</a></button>
            </div>
        </div>
    </Auth></div>;
}