const express = require('express')
const App = express();

App.get('/',(req,res)=>{
    res.send("<h1>Hello</h1>")
})

App.get('/about',(req,res)=>{
    res.send("<h1>About page</h1>")
})

App.get('/contact',(req,res)=>{
    res.send("<h1>contact page</h1>")
})
App.get('/home',(req,res)=>{
    res.send("<h1>Home page</h1>")
})




App.listen(3000,() =>{
    console.log('it is running')
})