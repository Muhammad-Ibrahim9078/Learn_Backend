import express from "express";
import { createUser, fetchAllUser, UserModal, welcometoDb } from "../../Controllers/UserController/UserController.js";

const router = express.Router();



router.route("/").get(welcometoDb);

router.route("/data").get(fetchAllUser);



export default router;