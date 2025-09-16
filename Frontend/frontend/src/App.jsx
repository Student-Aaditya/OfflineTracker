import Login from './component/Auth/Login';
import { Router,Routes,Route } from 'react-router-dom';
import Home from './Page/Home';
import Main from './Page/Main';
import Sign from './component/Auth/Sign';

function App() {
 

 
  return (
    <>
     <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/sign' element={<Sign/>}/>

    </Routes>
    
    </>
  )
}

export default App
