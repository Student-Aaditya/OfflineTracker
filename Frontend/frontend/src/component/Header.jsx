import { Link } from 'react-router-dom'
function Header({textColor,textFamily}) {
  return (
    <>
      <nav className='flex bg-amber-0 h-15 m-3 border-1 rounded-2xl'>
        <div className='ml-17 mt-2 flex wrap-flex '>
         
            <img src="images.jpeg" alt="network issue" className='rounded-xl h-10 w-10 '/>
        </div>
        <div className='text-xl ml-70 p-2 ' >
            <Link to='/home' className={`ml-4 ${textColor} ${textFamily}`}>Home</Link>
            <Link to='/map' className={`ml-4 ${textColor} ${textFamily}`}>Map</Link>
            <Link to='/blog' className={`ml-4 ${textColor} ${textFamily}`}>Blog</Link>
             <Link to='/weather' className={`ml-4 ${textColor} ${textFamily}`}>Weather</Link>
            <Link to='/login' className={`ml-4 ${textColor} ${textFamily}`}>ChatBot</Link>
        </div>
         <div className='text-xl ml-70 p-2' >
            <Link to='/sign'className={`ml-4 ${textColor} ${textFamily}`} >Sign-Up</Link>
            <Link to='/login' className={`ml-4 ${textColor} ${textFamily}`}>Log-In</Link>
            <Link to='/profile' className={`ml-4 ${textColor} ${textFamily}`}>Profile</Link>
        </div>
      </nav>
    </>
  )
}

export default Header
