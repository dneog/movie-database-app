import React, { useEffect, useState } from 'react'
import '../home/Home.css';
import MovieCard from '../../components/MovieCard';

export const Upcoming = () => {
  const [movie, setMovie]= useState([])

  
  useEffect(()=> {
    async function Movies(){
     try {
      const response= await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=b3aca5b263e23ef3f49fac80733d9671')
      const data= await response.json()
      setMovie(data.results)
      
     } catch (error) {
      console.log(error);
     }
      
        
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
