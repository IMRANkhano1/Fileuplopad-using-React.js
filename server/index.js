const express=require('express')
const cors=require('cors')
const multer=require('multer')

const app=express()
app.use(express.json())
app.use(cors())
app.listen(3000)
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'Uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload=multer({storage:storage})
app.post('/upload',upload.single("file"),async (req,res)=>{
    try{
        if(req.file){
            res.send({
                status:true,
            message:"file successfull uploaded"
            })
        }
        else{
            res.status(400).send({
                status:false,
                message:"file not found"
            })
        }
    
    }
    catch(err){
        res.status(500).send(err)
    }
})