import {Routes, Route} from 'react-router-dom'
import Registration from './pages/Reg/Reg'
import Authentication from './pages/Reg/Authentication'


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/authentication' element={<Authentication/>}/>
      </Routes>      
    </>
  )
}

export default App
