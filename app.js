//REWRITE USING EXPRESS JS 
//https://expressjs.com/en/starter/hello-world.html
const express = require('express');
const app = express()
const path = require('path');
const port = 3000
const fetch = require('node-fetch');
const axios = require('axios')
//You can use this to check if your server is working
// app.get('/', (req, res)=>{
//   res.send("Welcome to your server")
//   })
//body parser
app.use(express.json());
app.use(express.urlencoded(true));

// render the front end
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))


})




//POST request to the input field
app.post('/', (req, res) =>{
  
  const urlForShortcode = req.body.fullUrl
  console.log("This is the url from the input:" + urlForShortcode)


const apibaseUrl = `https://api.shrtco.de/v2/shorten`;

const params = new URLSearchParams({url: urlForShortcode});
console.log(params.toString())


const urlQueryString = params.toString() // url=newUrl

const shortCodeUrl = apibaseUrl + "?" + urlQueryString
console.log("This is the:" + " " + shortCodeUrl)

//takes the data and sends a request for this data (url)

axios.get(shortCodeUrl)
.then(response => {
    console.log(response.data.result.short_link);
    // console.log(response.data);
    res.send(response.data.result.short_link);
})
.catch(error => {
    console.log(error);
});

})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})





function getUrl() {
  const inputValue = document.getElementById('shortcodeUrl').value
  document.getElementById("displayUrl").innerHTML = inputValue

  console.log(inputValue)
}