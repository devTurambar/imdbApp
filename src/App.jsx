import logo from './logo.svg';
import './App.scss';
import Search from './components/Search';
import React from 'react'

function App() {

  const request = {
    i : "tt3896198"
  }
  const userAction = async () => {
    const response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=7daa359e');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(myJson)
  }
  userAction();
  return (
    <div className="app">
      <Search/>
    </div>
  );
}

export default App;
