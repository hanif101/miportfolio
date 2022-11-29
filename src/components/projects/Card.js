import React from 'react'

import './card.scss'

export function Card({ image, title}) {
  return (
    <div className='kard'>
      <img src={image} className='kard-img' alt='aa' />

      <div className='kard-body'>
        <h5 className='kard-title'>{title}</h5>
        {/* <p className='card-text'>{content}</p> */}
      </div>
    </div>
  )
}
