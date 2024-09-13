import AuthenticationForm from '../../components/Forms/AuthenticationForm';

import './Reg.css'
import bg from '../../assets/bg_reg.png'
import userIag from '../../assets/user.svg'
import line from '../../assets/Line 1.svg'

function Authentication () {
    return (
        <>
        
        <header>
      <div className="content">
      <div className="left">
      <a href="/"><h1 className="header-title">BNTPNHA API</h1></a>

      </div>
      <div className="right">

      </div>
      </div>

    </header>
            <img src={bg} alt='bg'className='bg'/> 
            <div className='registration'>
                <h2 className="registration-title">ВХОД</h2>
                <AuthenticationForm/>
            </div>
            

        </>
    );
}

export default Authentication ;