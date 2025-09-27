import express from 'express'
import weatherController from '../Controller/weatherController.js'
const router=express.Router();

router.get("/",weatherController.getData);

export default router;