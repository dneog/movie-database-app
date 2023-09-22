import React, { useEffect, useState } from 'react'
import './Home.css';
import MovieCard from '../../components/MovieCard';

export const Home = () => {
  const [movie, setMovie]= useState([])

  
  useEffect(()=> {
    async function Movies(){
     
        const response= await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=b3aca5b263e23ef3f49fac80733d9671')

        const data= await response.json()
       
        setMovie(data.results)
        
    }

    Movies()
   
  },[])

 

  return (
    <div className='maxHome'>
      {movie.map((item)=> (
           <MovieCard item={item} />
      ))}
     
    </div>
  )
}

