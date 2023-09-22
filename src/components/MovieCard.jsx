import React from 'react';
import './common.css';
import test from '../assets/test.jpg';
import {Link} from 'react-router-dom'
const MovieCard = ({item}) => {

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

  
  return (
    
    <div className='card'>
     <div className='im1'>
     <Link to={`/movieDetails/${item.id}`}>
    <img className='im2' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="move-poster" />
    </Link>
    </div>
  
    <Link to={`/movieDetails/${item.id}`}>
        <h3 className='movieName'>{item.title}</h3>
        </Link>
        <p className='ov1'>{convertDate(item.release_date)}</p>
    </div>
    
  )
}

export default MovieCard