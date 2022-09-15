const express=require("express")
const user=require("./modules/user")
    const mongoose=require("mongoose")
const bodyParser = require("body-parser")
const { validate } = require("./modules/user")
mongoose.connect("mongodb://localhost/mario")
const app=express()
app.use(express.json())

app.get("/mario",async (req,res)=>{
    const users= await user.find()

res.status(200).json({
    users
    })

    })
    app.get("/mario/:id",async (req,res)=>{
        const users= await user.find({_id:req.params.id})
        res.status(200).json({
        users
        })
    })
app.post("/mario",async (req,res)=>{
try{
    const users= await user.create(req.body)

res.status(200).json({
    users
    })}
catch(e){
        res.status(500).json({
        message:"either name or weight is missing"
    })
    }
})
app.patch("/mario/:id",async (req,res)=>{
try{
    const users= await user.updateOne({_id:req.params.id},{name:req.body.name},{runValidators:true})
res.status(200).json({
    users
    })}
    catch(e){
        res.status(400).json({
        message:e.message
    })
    }
})
app.delete("/mario/:id",async (req,res)=>{
    try{
        const users= await user.deleteOne({_id:req.params.id})
    
    res.status(200).json({
        message:`character deleted`,
        users
        })}
        catch(e){
            res.status(400).json({
            message:e.message
        })
        }
    })
app.get("*",(req,res)=>{
    res.status(404).json({
        status:'failed',
        message:'API not found'
    })
})
app.listen(5000,()=>console.log("server is up at 5000"))