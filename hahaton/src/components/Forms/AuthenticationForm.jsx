import './RegForm.css'

function AuthenticationForm() {
    return (
        <form>
            <label htmlFor='login'>Логин</label>
            <input id='login' name='login' type='text' className='styled-input'/>

            <label htmlFor='password'>Пароль</label>
            <input id='password' name='password' type='text' className='styled-input'/>

            <button className='styled-button'>Войти</button>
        </form>
    );
}

export default AuthenticationForm;