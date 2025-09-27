import { useForm } from "react-hook-form";
import Header from "./Header";
function Weather() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      latitude: "",
    },
  });

  const submit = (data) => {
    console.log("data fetch:", data);
  };

  return (
    <div className='bg-amber-300 items-center h-screen w-full bg-[url("/images.jpeg")] bg-cover bg-center'>
      <Header/>
      <div className=" w-70 h-80 p-10  mt-15 m-auto items-center  border-gray-50">
      <form onSubmit={handleSubmit(submit)} >
        <label htmlFor="latitude" className="text-red-500 text-xl">Enter the Latitude</label>
        <input
          type="text"
          placeholder="Latitude"
          {...register("latitude", {
            pattern: {
              value: /^\d+(\.\d+)?$/,
              message: "Enter a numeric value only, e.g. 23.565",
            },
          })}
          className="border p-2 text-white  rounded w-full mt-2 mb-5 border-gray-50"
        />
        {errors.latitude && <p className="text-red-500 mt-1">{errors.latitude.message}</p>}
            <label htmlFor="longitude"  className="text-red-500 text-xl ">Enter the Longitude</label>
        <input
          type="text"
          placeholder="Longitude"
          {...register("longitude", {
            pattern: {
              value: /^\d+(\.\d+)?$/,
              message: "Enter a numeric value only, e.g. 23.565",
            },
          })}
          className="border p-2 rounded w-full mt-2"
        />
        {errors.latitude && <p className="text-red-500 mt-1">{errors.latitude.message}</p>}
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      </div>
    </div>
  );
}

export default Weather;
