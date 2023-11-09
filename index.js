import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/',(request,response)=>{
    response.status(200).json({mensage:"Oi, o server tá on..."})
})

const host = 'localhost'
const port = 5000


app.listen(port,()=>{
    console.log(`Server working in http://${host}:${port}`)
})