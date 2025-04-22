const express = require('express');

const http = require('http');

const app = express();

const server = http.createServer(app);

const ejs = require("ejs")

const path = require("path")

app.use(express.static(path.join(__dirname, "public")))
//console.log(path.join(__dirname, "public"))

app.set('view', path.join(__dirname, "public"))

app.engine('html', ejs.renderFile)

app.use("/", (req,res)=>{

})


server.listen(3000, () => {
    console.log("sofra em http://localhost:3000")
});
