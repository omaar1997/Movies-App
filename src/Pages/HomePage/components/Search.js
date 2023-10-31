import React, {useState} from "react";
import '../css/Search.css';
import searchIcon from '../../../icons/searchIcon.png';

export default function Search(props) {
  const [search, setSearch] = useState('');
  const searchItems = (search) => {
    setSearch(search)
  }

  return (
    <div className="search">
      <input type="search" onChange={(e) => searchItems(e.target.value)} className="search-bar" placeholder="Search"></input>
      <img className="search-icon" src={searchIcon} alt="search icon" onClick={() => { props.sendMovieName(search) }} />
    </div>
  )
}

//const home=`http://www.omdbapi.com/?s=${searchPharase}&apikey=${apiKey}&page=${page}`
