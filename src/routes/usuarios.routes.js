import { Router } from "express";
import { getUsuarios,
    createUsuario,
    updateUsuario,
    deleteUsuario,
    getUsuario
} from "../controller/usuarios.controller.js";

const router=Router()

router.get('/usuarios', getUsuarios)
router.get('/usuarios/:id', getUsuario)
router.post('/usuarios', createUsuario)
router.patch('/usuarios/:id', updateUsuario)
router.delete('/usuarios/:id', deleteUsuario)

export default router