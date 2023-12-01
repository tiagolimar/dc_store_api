import express from 'express';
import db from './model/index.js';
import { routeProduto } from './routes/produto.routes.js';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

db.connection.sync()
.then(()=>{
    console.log("Drop and re-sync db.");
})
.catch(err=>{
    console.log("Failed to sync db.", err.message);
})


app.get('/',(request,response)=>{
    response.status(200).json({mensage:"Oi, o server tá on..."})
})

routeProduto(app)

const host = 'localhost'
const port = 5000


app.listen(port,()=>{
    console.log(`Server working in http://${host}:${port}`)
})
