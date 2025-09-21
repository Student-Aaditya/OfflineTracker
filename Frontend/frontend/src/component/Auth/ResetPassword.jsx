import { useForm } from 'react-hook-form'
import Header from '../Header';
import { Link } from 'react-router-dom';


function ResetPassword() {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const resetPassword=()=>{
        console.log("data submit");
    }
  return (
    <>
       <div className='bg-amber-300 items-center h-screen w-full bg-[url("/images.jpeg")] bg-cover bg-center'>
    <Header/>
    <div className=' items-center mx-auto h-80 w-100 mt-30  rounded-2xl border border-gray-200 p-6 '>
    <form onSubmit={handleSubmit(resetPassword)} className='grid  '>
    <label htmlFor="Name" className='text-2xl text-red-400'>Name</label>
    <input type="text" placeholder='Enter the name'
    {...register("name",{
      required:"Enter the Name",
    })} className='bg-amber-100 h-9 w-full rounded-xl mt-2 pl-2' /><br/>
    {errors.name && <p>{errors.name.message}</p>}

    <label htmlFor="Email" className='text-2xl  text-red-400'>Email</label>
    <input type="email" placeholder='Enter the email'
    {...register("email",{
      required:"Enter the eamil",
        pattern:{
          value:/^[a-zA-Z0-9._+]+@gmail\.com$/,
          message:"Email should be in xyz@gmail.com"
        }
    })}  className='bg-amber-100 h-9 rounded-xl mt-1 pl-2'/>
    {errors.email && <p>{errors.email.message}</p>}
  
    <Link to="/emailSent"><button type="submit" className='text-xl bg-red-700 w-full h-8 mt-8 mx-auto items-center rounded-xl text-white'>Submit</button> </Link>
    <Link to="/sign" className='text-white text-xl mt-4'> Back</Link>

    </form>
    </div>
    </div>
    </>
  )
}

export default ResetPassword
