import {useForm} from 'react-hook-form'
import axios from 'axios'
import Header from '../Header.jsx';
import { Link } from 'react-router-dom';

function Sign(){

  const {register,handleSubmit,formState:{errors}}=useForm();

  const submit=async(data)=>{
    try{
        const res=await axios.post("http://127.0.0.1:7056/offline/signup",{
            username:data.name,
            email:data.email,
            password:data.password
        })
        console.log(res.data);
    }catch(err){
        console.log(err);
    }
  }
  return (
    
    <div className='bg-amber-300 items-center h-screen w-full bg-[url("/images.jpeg")] bg-cover bg-center'>
    <Header/>
    <div className=' items-center mx-auto h-140 w-120 mt-10  rounded-2xl border border-gray-200 p-6 '>
    <form onSubmit={handleSubmit(submit)} className='grid  '>
    <label htmlFor="Name" className='text-2xl text-red-600'>Name</label>
    <input type="text" placeholder='Enter the name'
    {...register("name",{
      required:"Enter the Name",
    })} className='bg-amber-100 h-9 w-full rounded-xl mt-2 pl-2' /><br/>
    {errors.name && <p>{errors.name.message}</p>}

    <label htmlFor="Email" className='text-2xl  text-red-600'>Email</label>
    <input type="email" placeholder='Enter the email'
    {...register("email",{
      required:"Enter the eamil",
        pattern:{
          value:/^[a-zA-Z0-9._+]+@+[a-zA-Z]+\.co\.in$/,
          message:"Email should be in xyz@abc.co.in"
        }
    })}  className='bg-amber-100 h-9 rounded-xl mt-1 pl-2'/>
    {errors.email && <p>{errors.email.message}</p>}


    <label htmlFor="password"  className='text-2xl mt-5 text-red-600'>Password</label>
    <input type="password" placeholder='Enter the Password'
    {...register("password",{
      required:"Enter the password",
     pattern: {
      value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/,
      message:
        "Password must have at least 1 uppercase, 1 number, 1 special character, and be 6+ characters long",
    },
    })}  className='bg-amber-100 h-9 rounded-xl mt-2 pl-2'/>
    {errors.password && <p>{errors.password.message}</p>}
    <Link className='ml-75 text-amber-100'>Forget Password</Link>

    
    <label htmlFor="role"  className='text-2xl  text-red-600'>Role</label>
    <input type="text" placeholder='Enter the role (Ex-User/Admin)'
    {...register("role",{
      required:"Enter the Role :-User /Admin",
    })}  className='bg-amber-100 h-9 rounded-xl mt-2 pl-2'/>
    {errors.role && <p>{errors.role.message}</p>}

    <button type="submit" className='text-xl bg-red-700 w-full h-8 mt-8 mx-auto items-center rounded-xl text-white'>Submit</button>
    <button type="submit" className='text-xl bg-[url("/google.png")] bg-contain bg-no-repeat bg-center w-full h-8 mt-9 mx-auto items-center border border-amber-50  rounded-xl text-white'>
      Sign Up With Google</button>
    
    </form>
    </div>
    </div>
  
  )
}
export default Sign;

