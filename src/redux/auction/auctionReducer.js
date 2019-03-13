const initialState = {
  featured: null,
  auctions: [],
};

// Reducer
function auctionReducer (auctionState = initialState, action) {
  switch (action.type) {
    case 'SET_AUCTIONS':
      return {
        ...auctionState,
        auctions: action.auctions
      }
    case 'SET_FEATURED_AUCTION':
      return {
        ...auctionState,
        featured: action.auctionId
      }
    default:
      return auctionState
  }
}

export default auctionReducer
