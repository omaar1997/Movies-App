import React, { useState, useEffect } from "react";
import '../css/Search.css';
import searchIcon from '../icons/searchIcon.png';
import axios from "axios";

export default function Search(props) {
  const [search, setSearch] = useState('');
  const searchItems = (search) => {
    setSearch(search)
  }
  const [movieName, setMovieName] = useState('batman');
  useEffect(() => {
    props.sendMovieName(movieName)
    console.log("Send ", movieName)
  }, [movieName])



  return (
    <div className="search">
      <input type="search" onChange={(e) => searchItems(e.target.value)} className="search-bar" placeholder="Search"></input>
      <img className="search-icon" src={searchIcon} alt="search icon" onClick={() => { setMovieName(search) }} />
    </div>
  )
}

//const home=`http://www.omdbapi.com/?s=${searchPharase}&apikey=${apiKey}&page=${page}`


/* 

/ O L D

import React, { useState, useEffect } from "react";
import '../css/Search.css';
import searchIcon from '../icons/searchIcon.png';
import axios from "axios";

export default function Search(props) {
    const [search, setSearch] = useState('');
    const searchItems = (search) => {
        setSearch(search)
    }
    const [movieName, setMovieName] = useState('');
    useEffect(() => {
        let api=`http://www.omdbapi.com/?s=${movieName}&apikey=37eedde4`
        axios.get(api)
          .then(res => {
            console.log(res.data.Search)
            props.sendMovieName(movieName)
          }).catch(err => {
            console.log(err)
          })
      }, [movieName])

      

    return (
        <div className="search">
            <input type="search" onChange={(e) => searchItems(e.target.value)} className="search-bar" placeholder="Search"></input>
            <img className="search-icon" src={searchIcon} alt="search icon" onClick={()=>{setMovieName(search)}} />
        </div>
    )
}

*/