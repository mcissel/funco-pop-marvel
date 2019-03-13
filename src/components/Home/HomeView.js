import React from 'react'

import AuctionItem from './AuctionItem'
import './Home.scss'

const HomeView = ({ featured, additional, sortByCheapest, sortAlphabetical, sortByMostExpensive }) => (
  <div className="home">
    <div className="featured-auction">
      Featured Auction
      <AuctionItem {...featured} />
    </div>

    <div className="sorting">
      <button onClick={sortByCheapest}>Price Ascending</button>
      <button onClick={sortByMostExpensive}>Price Descending</button>
      <button onClick={sortAlphabetical}>Alphabetical</button>
    </div>

    {Array.isArray(additional) && additional.map(auction => (
      <AuctionItem {...auction} key={auction.itemId} />
    ))}
  </div>
)

export default HomeView
