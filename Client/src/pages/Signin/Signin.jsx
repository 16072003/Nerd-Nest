import Auth from '../../components/Auth/Auth'
export default function Signin() {
    return <div>
        <Auth>
            <div className='info'>
                <div className='infocontent'>
                    <h1 id='heading'>Sign In</h1>
                    <form>
                        <input type='text' id="inputSignIn" placeholder='Username'></input> 
                        <input type='password' id="inputSignIn" placeholder='Password'></input>
                        <div className='buttonSignin'>
                            <button id='signin'>SIGN IN</button> 
                        </div>
                    </form>
                </div>

            </div>
            <div className='message'>
                <div id='msghead'>
                    <h1>WELCOME <br></br> BACK</h1>
                </div>
                <div id='msgfoot'>
                    <p>Simply Create A Free Account by clicking the SignUp Button</p>
                    <button><a href='/signup'>SIGN UP</a></button>
                </div>
            </div>
        </Auth>
    </div>;
}