import {useForm} from 'react-hook-form'
import axios from 'axios'
import Header from '../Header.jsx';

function Sign(){

  const {register,handleSubmit,formState:{errors}}=useForm({
    defaultValues:{
      name:"",
      email:"",
      password:""
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
    <>
    <Header/>
    <h1>Sign</h1>
    <form onSubmit={handleSubmit(submit)}>
    <label htmlFor="Name">Name</label>
    <input type="text" 
    {...register("name",{
      required:"Enter the Name",
    })} /><br/>
    {errors.name && <p>{errors.name.message}</p>}

    <label htmlFor="Email">Email</label>
    <input type="email"
    {...register("email",{
      required:"Enter the eamil",
        pattern:{
          value:/^[a-zA-Z0-9._+]+@+[a-zA-Z]+\.co\.in$/,
          message:"Email should be in xyz@abc.co.in"
        }
    })} />
    {errors.email && <p>{errors.email.message}</p>}


    <label htmlFor="password">Password</label>
    <input type="password" 
    {...register("password",{
      required:"Enter the password",
     pattern: {
      value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/,
      message:
        "Password must have at least 1 uppercase, 1 number, 1 special character, and be 6+ characters long",
    },
      min:6
    })} />
    {errors.password && <p>{errors.password.message}</p>}
    <button type="submit">Submit</button>

    
    </form>
    </>
  )
}
export default Sign;
