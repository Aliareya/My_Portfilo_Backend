const express = require('express');
const app = express();

app.get('/' , (req ,res)=>{
   res.status(200).send("Hello From Home Page")
})

app.get("/about" , (req,res)=>{
   res.status(200).send("Hello From About Page ")
})

let port = 8000;
app.listen(port , ()=>{
   console.log(`The Server Run on Port ${port}`)
})