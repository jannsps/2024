import { pool } from "../db.js"
//consulta general
export const getUsuarios=async(req, res) => {
   try {
    const [rows]= await pool.query('SELECT * FROM usuarios')
    res.send(rows)
   } catch (error) {
    return res.status(500).json({
        message: 'Ha ocurrido un error'
    })
   }
}
//consulta por id

export const getUsuario=async(req, res) => {
    const id=req.params.id
    const [rows]= await pool.query('SELECT * FROM usuarios Where id =?',[id])
    if (rows.length<=0) return res.status(400).json({
        message:'Usuario no Registrado'
    })
    res.send(rows[0])
}


export const createUsuario= async(req, res) => {
    const {nombre,apellido,direccion} = req.body
    console.log(req.body);
    const [rows]= await pool.query('INSERT INTO usuarios (nombre,apellido,direccion) VALUES (?,?,?)',[nombre,apellido,direccion])
    console.log(rows);
    res.send({
        id:rows.insertId,
        nombre,
        apellido,
        direccion
    })
}
//actualizar usuario
export const updateUsuario=async(req, res) => {
    const {id}=req.params
    const {nombre,apellido,direccion}=req.body
    const [result]= await pool.query('UPDATE usuarios SET nombre=IFNULL(?,nombre),apellido=IFNULL(?,apellido),direccion=IFNULL(?,direccion) WHERE id=?',[nombre,apellido,direccion,id])

    if(result.affectedRows<=0) return res.status(404).jso({
        message:'Usuario no encontrado'
    })
    const [rows]=await pool.query('SELECT * FROM usuarios WHERE id=?',[id])
    res.json(rows[0])
}

//eliminar usuario
export const deleteUsuario=async(req, res) => {
    const {id}=req.params
    
    const [result]= await pool.query('DELETE FROM usuarios WHERE id=?',[id])
    if (result.affectedRows<=0) return res.status(400).json({
        message:'Usuario no encontrado'
    })
    res.sendStatus(204)
}