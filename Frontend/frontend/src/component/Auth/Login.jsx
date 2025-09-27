import { useForm } from 'react-hook-form'
import axios from 'axios'
import Header from '../Header.jsx';

function Sign() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      name: "",
      password: "",
    }
  });

  const submit = async (data) => {
    try {
      const res = await axios.post("http://127.0.0.1:7056/offline/login", {
        username: data.name,
        password: data.password
      })
      console.log(res.data);
      reset({
        name: "",
        password: ""
      });
    } catch (err) {
      console.log(err);
    }

  }
  return (

    <div className='bg-amber-300 items-center h-screen w-full bg-[url("/images.jpeg")] bg-cover bg-center'>
      <Header />
      <div className=' items-center mx-auto h-90 w-120 mt-30  rounded-2xl border border-gray-200 p-8 '>
        <form onSubmit={handleSubmit(submit)} className='grid  '>
          <label htmlFor="Name" className='text-2xl text-red-600'>Name</label>
          <input type="text" placeholder='Enter the name'
            {...register("name", {
              required: "Enter the Name",
            })} className='bg-amber-100 h-9 w-full rounded-xl mt-2 pl-2' /><br />
          {errors.name && <p>{errors.name.message}</p>}

          <label htmlFor="password" className='text-2xl mt-5 text-red-600'>Password</label>
          <input type="password" placeholder='Enter the Password'
            {...register("password", {
              required: "Enter the password",
            })} className='bg-amber-100 h-9 rounded-xl mt-2 pl-2' />
          

          <button type="submit" className='text-xl bg-red-700 w-full h-8 mt-8 mx-auto items-center rounded-xl text-white'>Submit</button>

        </form>
      </div>
    </div>

  )
}
export default Sign;

