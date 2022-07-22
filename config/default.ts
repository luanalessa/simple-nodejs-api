import 'dotenv/config'
 
export default {
    port: process.env.PORT,
    host: process.env.HOST,
    dbUri: process.env.DB_URI,
    salt: process.env.SALT
}