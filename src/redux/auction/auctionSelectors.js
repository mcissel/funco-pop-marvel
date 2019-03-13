import { createSelector } from 'reselect'

// alphabetical
export const sortedAlphabetical = createSelector(
  state => state.auctions.auctions,
  auctions => auctions.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase())
)

// cheapest price
export const sortedByPriceLowest = createSelector(
  state => state.auctions.auctions,
  auctions => auctions.sort((a, b) => getPrice(a) < getPrice(b))
)

// highest price
export const sortedByPriceHighest = createSelector(
  state => state.auctions.auctions,
  auctions => auctions.sort((a, b) => getPrice(a) > getPrice(b))
)

function getPrice(auction) {
  return auction.sellingStatus.convertedCurrentPrice.__value__
}
