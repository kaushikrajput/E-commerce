import React from 'react'
import MenuItem from '../Menu-Item/MenuItem'
import './directory.scss'

const Directory = ({categories}) => {
  return (
    <div className='directory'>
        {categories.map((category)=>(
            <MenuItem key={category.id} category={category}/>
        ))}
    </div>
  )
}

export default Directory