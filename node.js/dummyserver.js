/*
 * a dummy server to
 * catch the code returned by OAuthCallbak
 * */

const port = process.env.PORT || 8080

const express = require('express')
const url = require('url')
const querystring = require('querystring')
const bodyparser = require('body-parser')

const app = express()
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.get('/', (req, res)=> {
    res.status(200)
    res.send(req.query)
    res.end();
})

app.listen(port, ()=>{
    console.log("listening on http://localhost/")
    console.log(`the port is ${port}`)
})
