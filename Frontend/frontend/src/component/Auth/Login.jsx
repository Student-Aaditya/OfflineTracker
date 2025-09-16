import {useForm} from 'react-hook-form'
import Header from '../Header';

function Login(){

  const {register,handleSubmit,formState:{errors}}=useForm({
    defaultValues:{
      name:"",
      email:"",
      password:""
    }
  });

  const submit=(data)=>{
    console.log(data);
  }
  return (
    <>
    <Header/>
    <h1>Login</h1>
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
      required:"Enter the password"
    })} />
    {errors.password && <p>{errors.password.message}</p>}
    <button type="submit">Submit</button>

    
    </form>
    </>
  )
}
export default Login;
