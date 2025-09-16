import express from 'express'
import mapController from "../Controller/viewController.js";

const router=express.Router();


router.get("/offline/getMapData",mapController.getMapData);
router.post("/offline/map",mapController.mapData);

export default router