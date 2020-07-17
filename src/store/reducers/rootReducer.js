import {combineReducers} from 'redux'
import phonebookReducer from './phonebook'

export default combineReducers({
    phonebook: phonebookReducer,
})