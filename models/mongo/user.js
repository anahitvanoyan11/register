const dbConnection = require('../../db-connection/mongo');
const mongoose = dbConnection.getMongoose();
const Schema = mongoose.Schema;


const UserSchema = new Schema({

    firstName: String,
    lastName: String,
    email: String,
    password: Number,

}, { versionKey: false })

const User = mongoose.model('user', UserSchema);
module.exports = User;