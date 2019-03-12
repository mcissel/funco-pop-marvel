import React from 'react'
import PropTypes from 'prop-types'

const AuctionItem = ({ name }) => (
  <div className='auction-item'>
    {name}
  </div>
)


AuctionItem.propTypes = {
  name: PropTypes.string.isRequired,
}

export default AuctionItem
