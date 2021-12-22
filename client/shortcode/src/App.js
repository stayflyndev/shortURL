import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

const [url, setUrl] = useState(null)

useEffect(()=>{
  fetch("https://api.shrtco.de/v2/shorten?url=google.com")
  .then(res => res.json())
  .then(data => setUrl(data.result.short_link))
})

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" 
             alt="logo" />
          
<p>A simple React app.....</p>
  
        {url}
        <form action="/post" method="post" 
              className="form">
          <button type="submit">Connected?</button>
        </form>
      </header>
    </div>
  );
}
  
export default App;