import { Router } from "express";
//import {pool} from '../db.js'
import { prueba } from "../controller/index.controller.js";

const router=Router()
router.get('/prueba',prueba)
export default router