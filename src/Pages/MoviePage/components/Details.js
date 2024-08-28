import React from "react";
import { useState, useEffect } from "react";
import poster from "../../../icons/poster.jpg";
import "../css/Details.css";
import axios from 'axios';

export default function Details(props) {
    const [data, setData] = useState([])
    const [text, setText] = useState('')
    useEffect(() => {
        let api = `http://www.omdbapi.com/?t=batman&plot=full&apikey=37eedde4`
        axios.get(api)
            .then(res => {
                setData(res.data)
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    if (!data) {
        return (
            <div className="App">
            </div>
        )
    }

    function colorSetter(e) {
        if (e.target.id === 'About') {
            setText(data.Plot)
            e.target.style.color = "cornflowerblue"
            document.getElementById("Awards").style.color = "white"
            document.getElementById("Cast").style.color = "white"
        }
        else if (e.target.id === 'Awards') {
            setText(data.Awards)
            e.target.style.color = "cornflowerblue"
            document.getElementById("About").style.color = "white"
            document.getElementById("Cast").style.color = "white"
        }
        else if (e.target.id === 'Cast') {
            setText(data.Actors)
            e.target.style.color = "cornflowerblue"
            document.getElementById("About").style.color = "white"
            document.getElementById("Awards").style.color = "white"
        }
        //setButtonColor('red')
        //e.target.style.color = "red"
    }
    return (
        <div className="Container">
            <div className="Header">
                <h1>Details</h1>
            </div>
            <div className="Body">
                <div className="LeftBody">
                    <img className="Poster" src={poster} />
                </div>
                <div className="RightBody">
                    <div className="Button_Group">
                        <h2 id="About" className="Button" onClick={colorSetter}>About Movie</h2>
                        <h2 id="Awards" className="Button" onClick={colorSetter}>Awards</h2>
                        <h2 id="Cast" className="Button" onClick={colorSetter}>Cast</h2>
                    </div>
                    <div className="BodyText">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}