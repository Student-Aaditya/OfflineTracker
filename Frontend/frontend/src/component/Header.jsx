import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
      <nav className='flex bg-amber-0 h-15  '>
        <div className='size-18 ml-17 mt-2  '>
            <img src="images.jpeg" alt="network issue" className='rounded-xl'/>
        </div>
        <div className='text-xl ml-70 p-2 ' >
            <Link to='/home' className='text-black'>Home</Link>
            <Link to='/map' className='ml-4 text-black'>Map</Link>
            <Link to='/blog' className='ml-4 text-black'>Blog</Link>
             <Link to='/weather' className='ml-4 text-black'>Weather</Link>
            <Link to='/login' className='ml-4 text-black'>ChatBot</Link>
        </div>
         <div className='text-xl ml-70 p-2' >
            <Link to='/sign'className='ml-5 text-black' >Sign-Up</Link>
            <Link to='/login' className='ml-5 text-black'>Log-In</Link>
            <Link to='/profile' className='ml-5 text-black'>Profile</Link>
        </div>
      </nav>
    </>
  )
}

export default Header
