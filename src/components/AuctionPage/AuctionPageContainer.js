import React from 'react'
import { connect } from 'react-redux'
import AuctionView from "./AuctionPageView";

class AuctionPageContainer extends React.Component {
  render() {
    const { auctions, match } = this.props
    console.log(`%cthis`, 'background:#bada55; color:#222;', match, auctions)
    const auctionId  = match.params.id

    const auction = auctions.find(a=> a.itemId === auctionId)

    console.log(`%cauctoin`, 'background:#ffd040; color:#222;', auction)

    return (
      <AuctionView {...auction} />
    )
  }
}

const mapStateToProps = state => ({
  auctions: state.auctions.auctions,
})

export default connect(mapStateToProps)(AuctionPageContainer)
