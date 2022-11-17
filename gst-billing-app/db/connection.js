const mongoose = require("mongoose");

const MongoClient = require('mongodb').MongoClient;

const connectToDb = async () => {
    try{
        const URI=process.env.MONGODB_URI;
        mongoose.connect(
            // "mongodb://localhost:27017"
            // `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster2.skbgysj.mongodb.net/?retryWrites=true&w=majority`
            URI
            
        );
        mongoose.connection.on("error", (error) => {
            throw new Error(`unable to connect to database: ${error}`);
        });
    } catch (error) {
        throw new Error(`unable to connect to database: $(error)`);
    }

}

module.exports = {
    connectToDb,
};

// mongodb+srv://Nikita:nikita@cluster0.ej2u8.mongodb.net/?retryWrites=true&w=majority