const mongoose = require('mongoose');
const dbConfig = require("./database.config.js");
const DBConnection = {
    connect: async () => {
        // Connecting to the database
        mongoose.connect(dbConfig.url, {
            useNewUrlParser: true
        }).then(() => {
            console.log("Successfully connected to the database");
        }).catch(err => {
            console.log('Could not connect to the database. Exiting now...', err);
            process.exit();
        });
    },
    disconnect: async () => {
       await mongoose.connection.close();
    }
}

module.exports = DBConnection;