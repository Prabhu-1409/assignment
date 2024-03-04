const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const {user,employ_model} =require('../server/models/model.js')
const bodyParser = require('body-parser')
const uri = 'mongodb+srv://prabhu_m_s:T5eDLySw52GhH6yW@prabhucluster.67len0n.mongodb.net/?retryWrites=true&w=majority'
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())

mongoose.connect(uri).then((r)=>{
    console.log("connected")
}).catch((er)=>{
    console.log(er)
})

app.post("/signup",async (req,res)=>{
    //console.log(req.body)
    
    try{
        await user.findOne({
            email:req.body.emailid
        }).then((detail)=>{
            //console.log(detail)
            if(detail!=null){
                res.send("Email Already Exist, Please Login")
            }else{
                user.create({
                    firstname:req.body.firstname,
                    lastname:req.body.lastname,
                    email:req.body.emailid,
                    password:req.body.pass
                }).then(()=>{
                    console.log("created")
                    res.send("User Created Successfully !!")
                }).catch((err)=>{
                    console.log(err)
                })

            }
        })
    }catch(er){
        console.log(err)
    }
})

app.post('/signin',async (req,res)=>{
    //console.log(req.body)
    user.findOne({
        email:req.body.email,
        password:req.body.password
    }).then((d)=>{
        console.log(d)
        res.send(d)
    })
})

app.get("/employepage",async (req,res)=>{
    try{
        await employ_model.find().then((details)=>{
            //console.log(details)
            res.send(details)
        })
    }catch(err){
        console.log(err)
    }
})

app.post('/employee_search', async (req,res)=>{
    //console.log(req.body.search)
    const user_name = req.body.search.charAt(0).toUpperCase() + req.body.search.slice(1)
    //console.log(user_name)
    try{
        await employ_model.find({
            name:user_name
        }).then((det)=>{
            res.send(det)
            //console.log(det)
        })
    }catch(err){
        console.log(err)
    }
})

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen("3001",(req,res)=>{
    console.log("listening")
})