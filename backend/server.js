const Order = require("./order");
const User = require("./models/User");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://raj:raj12345@cluster0.pnfommx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

.then(() => {

    console.log("MongoDB Connected");

})

.catch((err) => {

    console.log(err);

});
app.post("/register", async (req, res) => {

    try{

        const newUser = new User({

            name: req.body.name,
            email: req.body.email,
            password: req.body.password

        });

        await newUser.save();

        res.send("User Registered Successfully");

    }

    catch(err){

        res.send(err);

    }

});


app.get("/", (req, res) => {

    res.send("Server Running");

});
app.post("/order", async (req, res) => {

    let newOrder = new Order({

        product: "Nike Shoes",
        price: 1999

    });

    await newOrder.save();

    res.send("Order Saved Successfully");

});
app.post("/order", (req, res) => {

    res.send("Order Saved Successfully");

});
app.listen(3001, () => {

    console.log("Server Started");

});