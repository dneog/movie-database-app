import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import './MovieDetails.css';
export const MovieDetails = () => {
  const {id}= useParams()
  const [movie, setMovie]= useState([])
  const [genres, setGenres]= useState([])
  const [language, setLanguage]= useState([])
  const [company, setCompany]= useState([])
  
  useEffect(()=> {
    async function Movies(){
     
        const response= await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b3aca5b263e23ef3f49fac80733d9671`)
        const data= await response.json()
        setMovie(data) 
        setGenres(data.genres)
        setLanguage(data.spoken_languages)
        setCompany(data.production_companies)
    }

    Movies()
   
  },[])

  function convertDate(dates){
    const movieDate= new Date(dates)
    const months= [
      'January','February','March','April','May','June','July','August','September','October','November','December'
    ]
    const month= months[movieDate.getMonth()]
    const day= movieDate.getDate()
    const year= movieDate.getFullYear()

    const editedDate= `${day} ${month}, ${year}`
    return editedDate
  }
 
  console.log(movie);

 



  return (
    <div className='details'>
      <div className='d1'>
      <img className='di1' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" />
      </div>

      <div className='d2'>
        <h3 className='d21'>{movie.title}</h3>
        <div className='d222'>
        {genres.map((g)=> (
          <p>{g.name}  &nbsp;</p>
        ))}
        </div>
        <div className='d26'>
        <p className='d23'>Overview</p>
        <p>{movie.overview}</p>
        </div>
         

        <p className='d23'>Tagline</p>
        <p>{movie.tagline}</p>

        <p className='d23'>Release Date</p>
          <p>{convertDate(movie.release_date)}</p>

        <p className='d23'>Language</p>
        <div className='d22'>
        {language.map((g)=> (
          <p>{g.name}  &nbsp;</p>
        ))}
       
        </div>
        <p className='d23'>Runtime</p>
        <p>{movie.runtime} min</p>
        <p className='d23'>Budget</p>
        <p>${movie.budget}</p>
        <p className='d23'>Revenue</p>
        <p>${movie.revenue}</p>
        
      </div>

    </div>
  )
}

