import axios from 'axios'

const weatherController={
    getData:async(req,res)=>{
        try{
            const coords = { lat: 28.4595, lon: 77.0266 };
            const { lat, lon } = coords;
            const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API}`)
            res.status(200).json(response.data);
            // console.log(response.data.weather[0]);
        }catch(err){
            console.log(err);
        }
    }
}
export default weatherController