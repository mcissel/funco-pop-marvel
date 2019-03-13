import { combineReducers } from 'redux'
import auctions from './auction/auctionReducer'

const rootReducer = combineReducers({
  auctions,
})

export default rootReducer
