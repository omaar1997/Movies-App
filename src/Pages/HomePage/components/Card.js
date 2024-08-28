import React from "react";
import '../css/Card.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
    return (
        <Link to={"./details"} className="card">
            <img src={props.url} alt="Card" className="card-img" />
            <div className="layer">
                <h4>Title: {props.title}</h4>
                <h4>Year: {props.year}</h4>
                <h4>imdbRating: {props.rating}</h4>
            </div>
        </Link>
    )
}



//<Link to={"./details"} className="card"></Link>


//const Navigate = useNavigate();
//<div onClick={() => { Navigate('./details'); console.log(props.title) }} className="card"></div>