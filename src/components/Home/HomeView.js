import React from 'react'

import AuctionItem from './AuctionItem'
import './Home.scss'

const HomeView = ({ featured, additional }) => (
  <div className="home">
    <div className="featured-auction">
      Featured Auction
      <AuctionItem {...featured} />
    </div>

    {Array.isArray(additional) && additional.map(auction => <AuctionItem {...auction} />)}
  </div>
)

export default HomeView
