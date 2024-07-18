import express from "express"
import {getData} from "../controller/data.controller.js"

const router = express.Router();

router.route("/data").get(getData);

export default router
