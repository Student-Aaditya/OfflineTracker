import User from "../Model/User.js";
import { validatorSchema } from "../Pattern/controller.js";
const controller = {
  getData: (req, res) => {
    res.render("../View/index.ejs");
  },

  signUp: (req, res) => {
    res.render("../View/Auth/sign.ejs");
  },
  sign: async (req, res) => {
    try {
      let { username, email, password, role } = req.body;
      const { error } = validatorSchema.validate(req.body, { abortEarly: false });
      if (error) {
        return res.status(400).json({
          msg: "Validation failed",
          details: error.details.map((d) => d.message),
        });
      }
      const newUser = new User({ email, username, role });
      const register = await User.register(newUser, password);
      console.log(register);
    } catch (err) {
      console.log(err);
    }
  },
  signData: async (req, res) => {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ msg: "not signup " });
      }

      const getData = await User.findById(id);
      res.status(200).json({ data: getData });
    }
    catch (err) {
      console.log(err);
    }
  },
  Login: (req, res) => {
    res.redirect("/")
  },
      Logout:(req,res)=>{
           try {
        req.logOut((err) => {
            if (err) {
                nextTick(err);
            }
            return res.status(200).json({ msg: "logout successful" });
        })
    }
    catch (err) {
        console.error(err);
        res.status(500).send("please fill the data");
    }
    },
  getAdminData: async (req, res) => {
    try {
      const data = await User.find({ role: "admin" });
      res.status(200).json({ admins: data });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getUserData: async (req, res) => {
    try {
      const data = await User.find({ role: "user" });
      res.status(200).json({ admins: data });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  forgetPassword: async (req, res) => {
    const { username, password } = req.body;
    const newData = await User.updateOne({ "username": username }, {
      $set: { "password": password }
    })
    res.status(200).json({ msg: "password change", data: newData });
  }
}

export default controller;