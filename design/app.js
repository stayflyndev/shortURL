const https = require('https');

const hostname = '127.0.0.1';
const port = 3000;

const server = https.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}:${port}/`);
});

const url = 'https://api.shrtco.de/v2/shorten?url={apiUrl}';


https.get(url, res => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    data = JSON.parse(data);
    console.log(data.result.short_link);
  })
}).on('error', err => {
  console.log(err.message);
}).end()


function getUrl() {
  var url = document.getElementById("shortcodeUrl").value;
  document.getElementById("demo").innerHTML = x;
}