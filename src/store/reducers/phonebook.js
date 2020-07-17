import {ADD_CONTACT, REMOVE_CONTACT, LOCALSTORAGE_GET, LOCALSTORAGE_SET, SEARCH_INPUT} from '../actions/actionsTypes'

let contactStorage

if (window.localStorage.getItem('contactsStorage') !== null) {
    contactStorage = Array.from(JSON.parse(window.localStorage.getItem('contactsStorage')))
} else {
    contactStorage = []
}

const initialState = {
    contacts: [],
    search: ''
}

export default function cityReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_CONTACT:
            action.contact.id = state.contacts.length
            return {
                ...state, contacts:  state.contacts.concat(action.contact)
            }
        case REMOVE_CONTACT:
            return {
                ...state, contacts:  state.contacts.filter(element => element.id !== action.contact.id)
            }
        case LOCALSTORAGE_GET:
            return {
                ...state, contacts: contactStorage
            }
        case LOCALSTORAGE_SET:
            window.localStorage.setItem('contactsStorage', JSON.stringify(state.contacts))
            return {
                ...state
            }
        case SEARCH_INPUT:
            return {
                ...state, search: action.search
            }
        default: 
            return state
    }
}