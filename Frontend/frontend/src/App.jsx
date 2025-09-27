import Login from './component/Auth/Login';
import { Router,Routes,Route } from 'react-router-dom';
import Home from './Page/Home';
import Main from './Page/Main';
import Sign from './component/Auth/Sign';
import ResetPassword from './component/Auth/ResetPassword.jsx';
import Verify from './component/Auth/Verify.jsx';
import Weather from './component/Weather.jsx';

function App() {
 

 
  return (
    <>
     <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/sign' element={<Sign/>}/>
      <Route path='/forget' element={<ResetPassword/>}/>
    <Route path='/emailSent' element={<Verify/>}/>
        <Route path='/weather' element={<Weather/>}/>

    </Routes>
    
    </>
  )
}

export default App
