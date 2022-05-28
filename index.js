
console.log(process.argv);
//https://devdojo.com/bo-iliev/how-to-write-your-first-nodejs-script

const http = require('http')
const express = require('express')
const app = express()
const fs = require('fs')
const { errorMonitor } = require('events')
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
  });

const server = http.createServer(function(req, res){
    if (req.url.indexOf('html') != 1 ){
        fs.readFile(__dirname + '/index.html', function(error, data){
            if(error){
                res.writeHead(404)
                res.write("Error: file not found")
            } else {
                res.writeHead(200, {"Content-Type": "text/html"})
                res.write(data)
                res.end('html page')
            }
        })
    }
})

server.listen(port, function(error){
    if (error){
        console.log("something went wrong", error)
    } else {
        console.log("Server is listening on port ", port)
    }
})

