import '../css/Fetching.css';
import Header from './Header';
import Search from './Search';
import Card from './Card';
import React, { useState, useEffect } from "react";
import axios from 'axios';


export default function Fetching() {

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
        <div>
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

