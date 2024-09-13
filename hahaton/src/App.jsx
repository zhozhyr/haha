import {Routes, Route} from 'react-router-dom'
import Registration from './pages/Reg/Reg'
import Authentication from './pages/Reg/Authentication'

import Main from './pages/main/Main'


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/authentication' element={<Authentication/>}/>
        <Route path='/' element={<Main/>}/>

      </Routes>      
    </>
  )
}

export default App
