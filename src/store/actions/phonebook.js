import {ADD_CONTACT, LOCALSTORAGE_SET, LOCALSTORAGE_GET, REMOVE_CONTACT, SEARCH_INPUT} from './actionsTypes'

export function fetchContactsStorage() {
    return dispatch => {
        dispatch(localStorageGet())
    }
}

export function addContactHandler(name, phone) {
    return dispatch => {
        const contact = {
            name,
            phone
        }
        dispatch(addContact(contact))
        dispatch(localStorageSet())
    }
}

export function removeContactLocal(contact) {
    return dispatch => {
        dispatch(removeContact(contact))
        dispatch(localStorageSet())
    }
}

export function removeContact(contact) {

    return {
        type: REMOVE_CONTACT,
        contact
    }
}

export function addContact(contact) {
    return {
        type: ADD_CONTACT,
        contact
    }
}

export function searchHandler(search) {
    return {
        type: SEARCH_INPUT,
        search
    }
}

function localStorageSet() {
    return {
        type: LOCALSTORAGE_SET
    }
}

function localStorageGet() {
    return {
        type: LOCALSTORAGE_GET
    }
}

