import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Fetching() {

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://www.omdbapi.com/?s=batman&apikey=37eedde4')
      .then(res => {
        setData(res.data.Search)
      }).catch(err => {
        console.log(err)
      })
  }, [])

}