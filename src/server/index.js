
const dotenv =require('dotenv')
dotenv.config()
console.log(`This is your API key ${process.env.API_KEY}`);
var path = require('path')
const express = require ('express')
const fetch =require('node-fetch')
const cors = require ('cors')
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.listen(5000, function () {
    console.log('Example app listening on port 5000!')
})

app.post('/test', async (req, res) =>{ 
        const url =req.body.url;
        const key=process.env.API_KEY;
        const url_base="https://api.meaningcloud.com/sentiment-2.1?"
        const URL = `${url_base}&key=${key}&url=${url}&lang=en`;
    
        let result= await fetch(URL,{
            method:'POST',  
        })
       let data =await result.json()
       if ( data && data.status.code==0)
       res.send(data)
       else{
           res.status(500).send({ message:'server has errors'})
       }

         });
      
   

























