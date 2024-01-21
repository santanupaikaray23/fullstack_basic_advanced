// var a =1;
// var a = "Santanu"
// var a = true
// var a = {}
// var a =[]
// console.log(a)
const express = require("express")

const app = express()

app.get("/",(req,res)=>{    //get the data
    res.send("Welcome to the world of web technologies !!")
})

app.post("/",(req,res)=>{    //post request - post data to the server
    res.send("Welcome to the world of web technologies !!")
})

const PORT = 3000 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is listening at port ${PORT}`)
})

// function sample(a,b){
//     console.log(a,b)
//     b()
// }
// sample(1,function(){
//     console.log('Hello')
// })

