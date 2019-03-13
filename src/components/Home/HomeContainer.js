import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import withAuctionData from './withAuctionData'
import {setAuctions, setFeaturedAuction} from '../../redux/auction/auctionActions';
import {sortedByPriceHighest, sortedByPriceLowest, sortedAlphabetical} from '../../redux/auction/auctionSelectors';
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
    const { featuredAuctionId, auctions } = this.props
    const viewProps = { featuredAuctionId, auctions }

    return <HomeView {...viewProps} />
  }
}

const mapStateToProps = state => ({
  auctions: state.auctions.auctions,
  featuredAuctionId: state.auctions.featured,
  sortedBy: {
    alphabetical: sortedAlphabetical(state),
    priceAscending: sortedByPriceLowest(state),
    priceDescending: sortedByPriceHighest(state),
  }
})

export default compose(
  withAuctionData,
  connect(mapStateToProps),
)(Home)
