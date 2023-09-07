import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Card from './components/Card';
import React, { useState, useEffect } from "react";
import axios from 'axios';


export default function App() {

  const [data, setData] = useState([])
  const [finalName, setfinalName] = useState('')


  const receiveMovieName = (search) => {
    setfinalName(search)
    console.log("recieved FinalName ", finalName)
  }

  useEffect(() => {
    let api = `http://www.omdbapi.com/?s=${finalName}&apikey=37eedde4`
    axios.get(api)
      .then(res => {
        setData(res.data.Search)
      }).catch(err => {
        console.log(err)
      })
  }, [finalName])

  if (!data) {
    return (
      <div className="App">
        <Header />
        <Search sendMovieName={receiveMovieName} />
      </div>
    )
  }

  return (
    <div className="App">
      <Header />
      <Search sendMovieName={receiveMovieName} />
      <div className='card-list'>
        {data.map((card) => {
          return <Card title={card.Title} year={card.Year} rating={"7.5/10"} url={card.Poster} />
        })}
      </div>
    </div>
  );
}

// Heba API
//https://www.omdbapi.com/?s=batman&apikey=37eedde4&page=${page}


//                     FADY


/*import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Card from './components/Card';
import React, { useState, useEffect } from "react";
import axios from 'axios';


export default function App() {

  const [data, setData] = useState([])
  const [movieName, setMovieName] = useState('');

  const feaching = () => {
    //axios.get('https://www.omdbapi.com/?s=batman&apikey=37eedde4')
    let api = `http://www.omdbapi.com/?s=${movieName}&apikey=37eedde4`
    axios.get(api)
      .then(res => {
        setData(res.data.Search)
      }).catch(err => {
        console.log(err)
      })
  }
  const ssss = (e) => {
    setMovieName(e.target.value)
  }
  if (!data) {
    return (
      <div>
        <input type="search" onChange={ssss} className="search-bar" placeholder="Search"></input>
        <button onClick={feaching} style={{color: "red", width: "200px"}}>Search</button>
      </div>
    )
  }

  return (
    <div className="App">
      <Header />
      <input type="search" onChange={ssss} className="search-bar" placeholder="Search"></input>
      <button onClick={feaching} style={{color: "red", width: "200px"}}>Search</button>
      <div className='card-list'>
        {data.map((card) => {
          return <Card title={card.Title} year={card.Year} rating={"7.5/10"} url={card.Poster} />
        })}
      </div>
    </div>
  );
}
*/