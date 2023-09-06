import React from "react";
import '../css/Card.css'

const maf = "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"

export default function Card(props) {

    return (
        <div className="card">
            <img src={props.url} alt="Card" className="card-img" />
            <div className="layer">
                <h4>Title: {props.title}</h4>
                <h4>Year: {props.year}</h4>
                <h4>imdbRating: {props.rating}</h4>
            </div>
        </div>
    )
}