// Action Creators
export const setAuctions = auctions => ({
  type: 'SET_AUCTIONS',
  auctions,
})

export const setFeaturedAuction = auctionId => ({
  type: 'SET_FEATURED_AUCTION',
  auctionId,
})
