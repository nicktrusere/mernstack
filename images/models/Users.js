const mongoose =require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    image: String,
    tagline: String,
    comments: String

})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel