import mapData from "../Model/mapData.js";

const mapController = {
  mapData: async (req, res) => {
    let { Longitude, Latitude, userId } = req.body;
    const mapDatas = new mapData({
      username: userId,
      Longitude: Longitude,
      Latitude: Latitude
    })
    await mapDatas.save();
    res.status(200).json({ msg: mapDatas });
  },
  getMapData: async (req, res) => {
    const data = await mapData.find().populate("username", "username email");
    res.status(200).json(data);
  }
}

export default mapController;