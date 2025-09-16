import express from 'express'
import controller from '../Controller/controller.js';

const router=express.Router();

router.get("/offline/adminData",controller.getAdminData);
router.get("/offline/userData",controller.getUserData);
router.get("/offline/signup",controller.signUp);
router.get("/",controller.getData);
router.post("/offline/login",controller.login);
router.post("/offline",controller.sign);
router.post("/offline/forget",controller.forgetPassword);
router.get("/offline/:id",controller.signData);

export default router;