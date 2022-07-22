const mongoose = require('mongoose')
require('dotenv').config()

function connect(){   
    return mongoose.connect("mongodb+srv://lessalsn:88eb9394@cluster0.i4bxe.mongodb.net/?retryWrites=true&w=majority")
        .then(() => {
            console.log("Database connected successfully")
        })
        .catch(err => {
            console.log("Error connecting to Mongo", err);
            process.exit(1);
        });
}

module.exports = connect;