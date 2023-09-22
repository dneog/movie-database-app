import React, { useEffect, useState } from 'react'
import {useSearchParams} from 'react-router-dom'
import MovieCard from '../components/MovieCard'
export const Search = () => {
  const [searchParams]= useSearchParams()
  const qTerm= searchParams.get("q")
  const [movie, setMovie]= useState([])

  useEffect(()=> {
  async function fetchSearch(){
    const response= await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b3aca5b263e23ef3f49fac80733d9671&query=${qTerm}`)
    const data= await response.json()
     setMovie(data.results)
    }

   fetchSearch()
  
  },[])
  console.log(movie);

  return (
    <>
    <div className='searchResult'>
    {movie && movie.length > 0 ? <p>Search Results for : <span className='sres1'> {qTerm}</span></p> : <p>No results found for <span className='sres1'> {qTerm}</span></p>}
    </div>
    
    <div className='maxHome'>
     
      {movie.map((item)=> (
           <MovieCard item={item} />
      ))}
     
    </div>
    </>
  )
}

