import Auth from '../../components/Auth/Auth'
export default function Signup() {
    return <div><Auth> <div className='info'>
        <div className='infocontent'>
            <h1 id='heading'>Sign Up</h1>
            <div className='signUpForm'>
                <div className='signUpInput'>
                    <input type='text' id="firstname" placeholder='first name'></input> 
                    <input type='text' id="lastname" placeholder='last name'></input> 
                </div>
                <input type="email" id="email" placeholder='Enter e-mail'></input>
                <div className='signUpInput'>
                    <input type="number" id="phone" placeholder='Enter Phone No.'></input> 
                    <input type='text' id="gender" placeholder='Enter gender'></input> 
                </div> 
                <input type='password' id="password" placeholder='Enter password'></input>
                <div className='buttonSignin'>
                    <button id='signin'>SIGN UP</button> 
                </div>
            </div>
            
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