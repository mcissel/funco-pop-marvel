import React from 'react'
import PropTypes from 'prop-types'

import AuctionItem from './AuctionItem'
import './Home.scss'

const HomeView = ({ featured, additional }) => (
  <div className="home">
    <div className="featured-auction">
      Featured Auction
      <AuctionItem />
    </div>
  </div>
)

HomeView.defaultProps = {}

HomeView.propTypes = {
  /** Docgen prop description */

}

export default HomeView
