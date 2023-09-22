import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export const PageNotFound = () => {
  const navigate= useNavigate()
  const handleClick=()=> {
    navigate('/')
  }
  return (
    <div className='pnfs'>
     <h2 className='pngh'>404 Page Not Found</h2>  
     <button onClick={handleClick} className='pnfb'>Back to Home</button>  
      </div>
  )
}

