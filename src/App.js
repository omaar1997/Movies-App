import React from "react";
import Fetching from "./Pages/HomePage/components/Fetching";
import Details from "./Pages/MoviePage/components/Details";
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Fetching />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  )
}

// <Routes>
//         <Route path='/' element={<App />} />
//         <Route path='/details' element={<Details />} />
//       </Routes>