import db from '../model/index.js';

const Produto = db.produto;

export const produtoController = {
    create: (request,response)=>{
        if(!request.body.nome){
            res.status(400).send({
                message:"Name must no void"
            })
        }

        const produto = request.body;
        Produto.create(produto)
        .then(data=>{
            response.send(data);
        })
        .catch(e=>{
            response.status(500).send({message : e.message || "Can't save product."});
        })
    },
    findAll: (request,response)=>{},
    findById: (request,response)=>{},
    findByStatus: (request,response)=>{},
    update: (request,response)=>{},
    deleteById: (request,response)=>{},
    deleteALL: (request,response)=>{},
}