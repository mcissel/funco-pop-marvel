import React from 'react'
import fetchJsonp from "fetch-jsonp";
import {parseResponse} from "./helpers";

const appId = process.env.REACT_APP_EBAY_APP_ID;
const keywords = ['funco', 'pop', 'marvel'];

const withAuctionData = count => WrappedComponent => {
  class AuctionProvider extends React.Component {
    state = {
      auctions: null,
      featuredAuctionId: null,
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
          this.setState({
            auctions: items.slice(0, count),
            featuredAuctionId: items[0].itemId,
          })
        }).catch(function(error) {
          console.log('parsing failed', error)
        })
    }

    render() {
      const { auctions, featuredAuctionId } = this.state
      console.log(`%cstate`, 'background:#ffd040; color:#222;', this.state)
      return (
        <WrappedComponent
          auctions={auctions}
          featuredAuctionId={featuredAuctionId}
        />
      )
    }
  }

  return AuctionProvider
}

export default withAuctionData;
