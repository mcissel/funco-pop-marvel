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
import {createConnect} from "react-redux/es/connect/connect";


class Home extends React.Component {
  state = {
    additional: null
  }

  componentDidUpdate(prevProps, prevState) {
    const { auctions, featuredAuctionId, dispatch } = this.props
    if (auctions !== prevProps.auctions) {
      dispatch(setAuctions(auctions))
    }

    if (featuredAuctionId !== prevProps.featuredAuctionId) {
      dispatch(setFeaturedAuction(featuredAuctionId))
    }
  }

  sortByCheapest = () => {
    this.setState({
      additional: this.props.sortedBy.priceAscending
    })
  }
  sortByMostExpensive = () => {
    this.setState({
      additional: this.props.sortedBy.priceDescending
    })
  }
  sortAlphabetical = () => {
    this.setState({
      additional: this.props.sortedBy.alphabetical
    })
  }


  render() {
    const { featuredAuction, additionalAuctions } = this.props
    const { additional } = this.state;

    const viewProps = {
      featured: featuredAuction,
      additional: additional || additionalAuctions,
      sortByCheapest: this.sortByCheapest,
      sortByMostExpensive: this.sortByMostExpensive,
      sortAlphabetical: this.sortAlphabetical,
    }

    console.log(`%cthis`, 'background:pink;', this.state)

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
