import {useForm} from 'react-hook-form'
import axios from 'axios'
import Header from '../Header.jsx';

function Sign(){

  const {register,handleSubmit,formState:{errors}}=useForm({
    defaultValues:{
      name:"Enter the name",
      email:"Enter the email",
      password:"Enter "
    }
  });

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
    <h1 className='text-white text-4xl text-center'>Sign</h1>
    <div className=' items-center mx-auto h-120 w-120 mt-20 rounded-2xl'>
    <form onSubmit={handleSubmit(submit)} className='grid '>
    <label htmlFor="Name" className='text-2xl text-red-600'>Name</label>
    <input type="text" 
    {...register("name",{
      required:"Enter the Name",
    })} className='bg-amber-100 h-9 rounded-2xl mt-2 pl-2' /><br/>
    {errors.name && <p>{errors.name.message}</p>}

    <label htmlFor="Email" className='text-2xl mt-2 text-red-600'>Email</label>
    <input type="email"
    {...register("email",{
      required:"Enter the eamil",
        pattern:{
          value:/^[a-zA-Z0-9._+]+@+[a-zA-Z]+\.co\.in$/,
          message:"Email should be in xyz@abc.co.in"
        }
    })}  className='bg-amber-100 h-9 rounded-2xl mt-2 pl-2'/>
    {errors.email && <p>{errors.email.message}</p>}


    <label htmlFor="password"  className='text-2xl mt-5 text-red-600'>Password</label>
    <input type="password" 
    {...register("password",{
      required:"Enter the password",
     pattern: {
      value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/,
      message:
        "Password must have at least 1 uppercase, 1 number, 1 special character, and be 6+ characters long",
    },
      min:6
    })}  className='bg-amber-100 h-9 rounded-2xl mt-2 pl-2'/>
    {errors.password && <p>{errors.password.message}</p>}
    <button type="submit" className='text-2xl bg-blue-700 w-24 h-10 mt-3 mx-auto items-center rounded-2xl'>Submit</button>
    </form>
    </div>
    </div>
  
  )
}
export default Sign;
