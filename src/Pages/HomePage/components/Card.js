import React from "react";
import '../css/Card.css';
import { useNavigate } from 'react-router-dom';

export default function Card(props) {
    const Navigate = useNavigate();
    return (
        <div onClick={() => Navigate('./details')} className="card">
            <img src={props.url} alt="Card" className="card-img" />
            <div className="layer">
                <h4>Title: {props.title}</h4>
                <h4>Year: {props.year}</h4>
                <h4>imdbRating: {props.rating}</h4>
            </div>
        </div>
    )
}