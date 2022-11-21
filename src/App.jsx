import './App.scss';
import Search from './components/Search';
import React, { useEffect, useState } from 'react'

function App() {
  const [result, setResult] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  // TODO VER COM O FORIRO PQ N FUNCA COM USE EFFECT!!!!
  // useEffect(
  //   () => {
  //         apiRequest(searchTerm);
  //         }
  //   ,[searchTerm]
  // )

  const apiRequest = (search) => {
    setSearchTerm(search)
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
     
    // fetch('https://imdb-api.com/en/API/SearchTitle/k_swjm05ia/'+urlParam, requestOptions)
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(result => {
    //     console.log(result);
    //     //limit to 10 results
    //     setResult(result.results.slice(0,10))
    //   })
      // .catch(error => console.log('error fetch', error));
  }


  return ( 
    <div className="app">
      <div className="search">
        <div className="search-container">
          <Search id={result.id} result={result} searchTermExchange={(titleSearched) => {apiRequest(titleSearched)}}/>
          
          {/* ***********************************   TODO   PQ N FUNCIONA ASSIM, VER COM O FORIRO...ALSO, VER A CENA DA KEY PROP EM SEARCH *************************************** 
          <Search key={`${searchTerm}`} result={result} searchTermExchange={(titleSearched) => {setSearchTerm(titleSearched)}}/> */}
        </div>
      </div>
    </div>
  );
}

// let obj = {
//   a:"aa",
//   b:"bb",
//   c:"cc"
// }

// let obj2 = {
//   ...obj,
//   c:"ccc"
// }
// console.log(obj2)

// let bbb = "lalala";
// bbb = bbb+"baba"
// console.log(bbb)

export default App;