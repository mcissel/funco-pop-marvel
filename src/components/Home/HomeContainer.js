import React from 'react'
import fetchJsonp from 'fetch-jsonp'
import { connect } from 'react-redux'

import {setAuctions, setFeaturedAuction} from '../../redux/auction/auctionActions';
import {sortedByPriceHighest, sortedByPriceLowest, sortedAlphabetical} from '../../redux/auction/auctionSelectors';
import HomeView from './HomeView'
import {parseResponse} from './helpers'

const appId = process.env.REACT_APP_EBAY_APP_ID;
const keywords = ['funco', 'pop', 'marvel'];

class Home extends React.Component {
  constructor(props) {
    super(props)
    console.log(`%c ${appId}`, 'background:#bada55; color:#222;')
  }

  componentDidMount() {
    let requestUrl = 'https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords';
    requestUrl += '&SERVICE-VERSION=1.0.0';
    requestUrl += `&SECURITY-APPNAME=${appId}`;
    requestUrl += '&RESPONSE-DATA-FORMAT=JSON';
    requestUrl += '&REST-PAYLOAD';
    requestUrl += `&keywords=${keywords.join('%20')}`;

    fetchJsonp(requestUrl)
      .then((response) => {
        return response.json()
      }).then((json) => {
        const items = parseResponse(json);
        console.log(`%citems`, 'background:#bada55; color:#222;', items)
        window.ti = items;
        this.props.dispatch(setAuctions(items))
        this.props.dispatch(setFeaturedAuction(items[0].itemId))
      }).catch(function(error) {
        console.log('parsing failed', error)
      })
  }

  componentDidUpdate(prevProps, prevState) {

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

export default connect(mapStateToProps)(Home)
