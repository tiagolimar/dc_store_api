import { Sequelize } from "sequelize";
import { DB_CONFIG } from "./config/config.js";

const connection = new Sequelize(DB_CONFIG.db,DB_CONFIG.user,DB_CONFIG.password,{
    host: DB_CONFIG.host,
    dialect: DB_CONFIG.dialect,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
})

try{
    await connection.authenticate();
    console.log('Connection has been estavalçaks successfully');
}catch(error){
    console.error('Unable to connect to the database:',error)
}

const db = {}

db.Sequelize = Sequelize;
db.sequelize = connection;

export default db;