import { combineReducers } from 'redux'

import user from './user'
import calculator from './calculator'

const rootReducer = combineReducers({ user, calculator })

export default rootReducer
