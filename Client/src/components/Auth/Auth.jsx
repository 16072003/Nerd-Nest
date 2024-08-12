import './auth.css'
import IMG from '../../assets/logo.png'

{/*export default function Auth() {
    return (
        <div className="Auth">
            <img src={IMG} alt="logo" />
        </div>
    )
}*/}

export default function Auth({ children}) {
    return (
        <div className="auth">
            <div className='auth-back'>
            </div>
            
            <div className='auth-container'>
                {children}
            </div>
            <div className='auth-logo'>
                <img src={IMG} alt="logo" />
            </div>
            {/* <img src={IMG} alt="logo" /> */}
        </div>
    )
}

