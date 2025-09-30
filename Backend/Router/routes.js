import express from 'express'
import controller from '../Controller/controller.js';
import passport from 'passport';
const router=express.Router();

router.get("/offline/adminData",controller.getAdminData);
router.get("/offline/userData",controller.getUserData);
router.post("/offline/login", passport.authenticate("local", { failureRedirect: "/offline/signup", failureFlash: true }), controller.Login);
router.get("/offline/logout",controller.Logout);
router.post("/offline",controller.sign);
router.post("/offline/forget",controller.forgetPassword);
router.get("/offline/:id",controller.signData);

export default router;