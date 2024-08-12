import Auth from '../../components/Auth/Auth'
import axios from 'axios'
const Signin = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/signin', values)
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <Auth>
                <div className='info'>
                    <div className='infocontent'>
                        <h1 id='heading'>Sign In</h1>
                        <form onSubmit={handleSubmit}>
                            <input type='text' id="inputSignIn" placeholder='Email' onChange={(e) => setUsername({ ...values, email: e.target.value})}></input> 
                            <input type='password' id="inputSignIn" placeholder='Password' onChange={(e) => setUsername({ ...values, password: e.target.value})}></input>
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
        </div>
    )
}

export default Signin