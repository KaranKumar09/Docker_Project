// const mongoose = require('mongoose');
// const connect = mongoose.connect("mongodb://localhost:27017/Login-tut");

// // Check database connected or not
// connect.then(() => {
//     console.log("Database Connected Successfully");
// })
// .catch(() => {
//     console.log("Database cannot be Connected");
// })

// // Create Schema
// const Loginschema = new mongoose.Schema({
//     name: {
//         type:String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });

// // collection part
// const collection = new mongoose.model("users", Loginschema);

// module.exports = collection;

require('dotenv').config(); // 👈 Add this at the top
const mongoose = require('mongoose');

const connect = mongoose.connect(process.env.MONGO_URL); // 👈 use .env

connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch((err) => {
    console.error("Database connection failed", err);
});

const Loginschema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = new mongoose.model("users", Loginschema);

module.exports = collection;
