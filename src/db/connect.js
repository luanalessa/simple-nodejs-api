import mongoose from "mongoose";
import 'dotenv/config'


function connect(){   
    return mongoose.connect(process.env.DATABASE_URI)
        .then(() => {
            console.log("Database connected successfully")
        })
        .catch(err => {
            console.log("Error connecting to Mongo", err);
            process.exit(1);
        });
}

export default connect;