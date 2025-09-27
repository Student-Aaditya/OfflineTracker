import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
      <nav className='flex bg-amber-0 h-15  '>
        <div className='size-18 ml-17 mt-2  '>
            <img src="images.jpeg" alt="network issue" className='rounded-xl'/>
        </div>
        <div className='text-xl ml-70 p-2 ' >
            <Link to='/home' className='text-white'>Home</Link>
            <Link to='/sign' className='ml-4 text-white'>Map</Link>
            <Link to='/login' className='ml-4 text-white'>Weather</Link>
             <Link to='/weather' className='ml-4 text-white'>Weather</Link>
            <Link to='/login' className='ml-4 text-white'>ChatBot</Link>
        </div>
         <div className='text-xl ml-70 p-2' >
            <Link to='/sign'className='ml-5 text-white' >Sign-Up</Link>
            <Link to='/login' className='ml-5 text-white'>Log-In</Link>
            <Link to='/profile' className='ml-5 text-white'>Profile</Link>
        </div>
      </nav>
    </>
  )
}

export default Header
