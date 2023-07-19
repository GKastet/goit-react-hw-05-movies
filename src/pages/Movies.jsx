import { useState } from "react";
import { Link } from "react-router-dom"

//import { useEffect } from "react"
const Movies =()=>{
    const [movies,setMovies]=useState([]);
    //isLoading(false)
//useEffect(()=>{
    //http запит, якщо треба

//},[])
return (<div>
    Movies element
    {movies.map((movie)=>{
        return (<Link key='id' to={`${movie.id}`}>{movie}</Link>)
    })}
    </div>)
}

export default Movies