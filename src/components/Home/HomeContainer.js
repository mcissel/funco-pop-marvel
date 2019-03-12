import React from 'react'
import fetchJsonp from 'fetch-jsonp'
import HomeView from './HomeView'

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
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log('parsed json', json)
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  componentDidUpdate(prevProps, prevState) {

  }

  render() {
    const {} = this.props
    return (
      <HomeView />
    )
  }
}

export default Home
