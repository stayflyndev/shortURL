//REWRITE USING EXPRESS JS 
//https://expressjs.com/en/starter/hello-world.html
const express = require('express');
const app = express()
const path = require('path');
const port = 5000
const fetch = require('node-fetch');
const axios = require('axios');
const session = require('express-session');
const cookieParser = require("cookie-parser");


//You can use this to check if your server is working
app.get('/', (req, res)=>{
  res.send({"test":"Welcome to your server"})
  })


// REACT ON THE FRONTEND
  app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
  });
    

const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
  secret: 'fakec00kie',
  saveUninitialized:true,
  cookie: { maxAge: oneDay },
  resave: false 
}))

//body parser
app.use(express.json());
app.use(express.urlencoded(true));

// render the front end
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './index.html'))
  
// })

// // POST/PUT REQUEST 
// app.post('/', (req, res) =>{

//   const allShortUrls = []
  
//   const urlForShortcode = req.body.fullUrl
//   console.log("This is the url from the input:" + urlForShortcode)

// //API
// const apibaseUrl = `https://api.shrtco.de/v2/shorten`;

// const params = new URLSearchParams({url: urlForShortcode});
// console.log(params.toString())

// const urlQueryString = params.toString() // url=newUrl

// const shortCodeUrl = apibaseUrl + "?" + urlQueryString
// console.log("This is the:" + " " + shortCodeUrl)

// //HTTP TO ACCESS API RES WITH OBJ
// axios.get(shortCodeUrl)
// .then(response => {
//     console.log(response.data.result.short_link);
//     // console.log(response.data);
//     res.send(response.data.result.short_link);
// })
// .catch(error => {
//     console.log(error);
// });

// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
