const mongoose = require('mongoose');
const DATABASE_URL = 'mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true';
const DBConnection = {
    connect: async () => {
        // Connecting to the database
        mongoose.connect(DATABASE_URL, {
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