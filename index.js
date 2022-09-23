const express = require("express")
const path = require("path")
const fs = require('fs')

const app = express()
const PORT = process.env.PORT || 8080
app.use(express.json())
 
const leer = fs.readFileSync('./productos.txt', 'utf-8')
const data = (JSON.parse(leer, null, 2))
console.log(data)

let random = Math.floor((Math.random() * 3) + 1); 
let result = data.filter( producto => producto.id == random)
console.log(result)
              
app.get( "/productos" , (req, res) => {
    res.send({data}) 
}) 

app.get( "/productoRandom" , (req, res) => {    
    res.send( {result} )
})  

const server = app.listen(PORT, () => {
    console.log("server is run on port " + PORT)
}) 
server.on('error', (error) =>console.log( ` Error en servidor ${error}` ))