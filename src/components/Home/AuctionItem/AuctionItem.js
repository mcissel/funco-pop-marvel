import React from 'react'

const AuctionItem = ({ title, location, galleryURL }) => (
  <div className='auction-item'>
    <h3>{title}</h3>
    <p>{location}</p>
    <img src={galleryURL} />
  </div>
)


export default AuctionItem
