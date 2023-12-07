import 'dotenv/config';

export const DB_CONFIG = {
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    db: process.env.DB,
    dialect: process.env.DIALECT,
}