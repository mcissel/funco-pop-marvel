import { createSelector } from 'reselect'

export const getFeaturedAuction = createSelector(
  state => state.auctions,
  ({ featured, auctions }) => {
    console.log(`%c `, 'background:#f40; color:#222;', featured, auctions)
    return auctions.find(a => a.itemId === featured)
  }
)

export const getAdditionalAuctions = createSelector(
  state => state.auctions,
  ({ featured, auctions }) =>
    auctions.filter(a => a.itemId !== featured)
)

// alphabetical
export const sortedAlphabetical = createSelector(
  getAdditionalAuctions,
  auctions => auctions.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase())
)

// cheapest price
export const sortedByPriceLowest = createSelector(
  getAdditionalAuctions,
  auctions => auctions.sort((a, b) => getPrice(a) < getPrice(b))
)

// highest price
export const sortedByPriceHighest = createSelector(
  getAdditionalAuctions,
  auctions => auctions.sort((a, b) => getPrice(a) > getPrice(b))
)

function getPrice(auction) {
  return auction.sellingStatus.convertedCurrentPrice.__value__
}
