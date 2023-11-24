import express from "express"
import { produtoController } from './../controller/produto.controller.js';
import {app} from "../index.js"

export const routeProduto = ()=>{
    const router = express.Router();

    router.post('/produto', produtoController.create)
    router.get('/produtos', produtoController.findAll)
    router.get('/produto/:id', produtoController.findById)
    router.get('/produtos:status', produtoController.findByStatus)
    router.put('/produto:id', produtoController.update)
    router.delete('/produto:id', produtoController.deleteById)
    router.delete('/produtos', produtoController.deleteALL)

    app.use('/api',router)
}