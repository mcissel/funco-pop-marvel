import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import withAuctionData from './withAuctionData'
import {setAuctions, setFeaturedAuction} from '../../redux/auction/auctionActions';
import {
  sortedByPriceHighest,
  sortedByPriceLowest,
  sortedAlphabetical,
  getFeaturedAuction,
  getAdditionalAuctions,
} from '../../redux/auction/auctionSelectors';
import HomeView from './HomeView'


class Home extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    const { auctions, featuredAuctionId, dispatch } = this.props
    if (auctions !== prevProps.auctions) {
      dispatch(setAuctions(auctions))
    }

    if (featuredAuctionId !== prevProps.featuredAuctionId) {
      dispatch(setFeaturedAuction(featuredAuctionId))
    }
  }

  render() {
    const { featuredAuction, additionalAuctions } = this.props
    const viewProps = {
      featured: featuredAuction,
      additional: additionalAuctions,
    }

    console.log(`%cview≥`, 'background:#ffd040; color:#222;', viewProps)
    return <HomeView {...viewProps} />
  }
}

const mapStateToProps = state => ({
  featuredAuction: getFeaturedAuction(state),
  additionalAuctions: getAdditionalAuctions(state),
  sortedBy: {
    alphabetical: sortedAlphabetical(state),
    priceAscending: sortedByPriceLowest(state),
    priceDescending: sortedByPriceHighest(state),
  }
})

export default compose(
  withAuctionData(11),
  connect(mapStateToProps),
)(Home)
