import axios from 'axios'

const weatherController={
    getData:async(req,res)=>{
        try{
            const {lat,lon}=req.query;
            const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API}`)
            const data=response.data;
            res.status(200).json({msg:data});
        }catch(err){
            console.log(err);
        }
    }
}
export default weatherController