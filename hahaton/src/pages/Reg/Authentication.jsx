import AuthenticationForm from '../../components/Forms/AuthenticationForm';

import './Reg.css'
import bg from '../../assets/bg_reg.png'

function Authentication () {
    return (
        <>
            <h1 className="header-title">BNTPNHA API</h1>
            <img src={bg} alt='bg'className='bg'/> 
            <div className='registration'>
                <h2 className="registration-title">ВХОД</h2>
                <AuthenticationForm/>
            </div>
            

        </>
    );
}

export default Authentication ;