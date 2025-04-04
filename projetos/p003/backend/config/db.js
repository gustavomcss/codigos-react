const mongoose = require("mongoose");

// DB Connection
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.69xpm1u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

        console.log("MongoDB connected!");

        return dbConn;
    } catch (error) {
        console.log(error);
    }
};

conn();

module.exports = conn;