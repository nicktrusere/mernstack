const express = require("express");
const app = express();
const path = require('path')
const UserModel = require('./models/Users')

app.use(cors())
app.use(express.json())
app.use(express.static('public'))


const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    },
})

const upload = multer({storage: storage})

app.set("view engine", "ejs");

app.get("/upload", (req, res) => {
    res.render("upload");
});

app.post("/upload", upload.single("image"), (req, res) => {
    UserModel.create({Image: req.file.filename})
    .then(result => res.json(result))
    .catch(err => console.log(err))
});

app.listen(3001);
console.log("3001 is the port")