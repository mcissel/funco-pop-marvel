import React from 'react'
import { Link } from 'react-router-dom'

const AuctionItem = ({ itemId, title, location, galleryURL }) => (
  <Link to={`/auction/${itemId}`} className='auction-item'>
    <h3>{title}</h3>
    <p>{location}</p>
    <img src={galleryURL} />
  </Link>
)

export default AuctionItem
