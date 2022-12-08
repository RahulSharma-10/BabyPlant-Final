
const password= "hydroponicsbtp";

//Key requirements
const express = require('express'); //calls express
const mongoose = require('mongoose');
const productModel = require('./models/Products')
const cors = require('cors')

const app = express();   //initialises app server

//Middlewares
app.use(express.json());
app.use(cors());

//Connecting to MongoDb
const uri = "mongodb+srv://Banksy_10:hydroponicsbtp@products.gyqisno.mongodb.net/product?retryWrites=true&w=majority";
mongoose.connect(uri);

// //Inserting products
app.get("/", async(req, res)=> {

    const prod = new productModel({name: "kit", price: "3000", image: "www.get", category:"check", description:"lorem ipsum"});

    try{
        console.log('entry done');
       await prod.save();
       res.send('Data inserted');
    } catch(err){
        console.log(err);
    }
});

app.get("/read", async(req, res)=>{
    productModel.find({}, (err, result)=>{
        if(err)
        {
            res.send(err);
        }
        res.send(result);
    });
});

//Server run check
app.listen(3001, ()=>{
    console.log('Server running on port 3001')
})