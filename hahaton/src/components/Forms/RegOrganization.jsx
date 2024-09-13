import './RegForm.css'
import Authentication from '../../pages/Reg/Authentication'
function OrganizationForm() {
    return (
        <form>
            <label htmlFor='input1'>Поле 1</label>
            <input id='input1' name='input1' type='text' className='styled-input'/>

            <label htmlFor='input2'>Поле 2</label>
            <input id='input2' name='input2' type='text' className='styled-input'/>

            <label htmlFor='input3'>Поле 3</label>
            <input id='input3' name='input3' type='text' className='styled-input'/>

            <button className='styled-button'>Зарегистрироваться</button>
        </form>
    );
}

export default OrganizationForm;