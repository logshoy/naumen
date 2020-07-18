import React from 'react'
import classes from './phonebook.module.css'
import { connect } from 'react-redux';
import Modal from './modal/modal'
import ListContacts from './listcontacts/liscontacts'
import { fetchContactsStorage, searchHandler } from '../store/actions/phonebook'

class phonebook extends React.Component {

    state = { show: false };

    showModal = e => {
        this.setState({ show: !this.state.show });
    };

    componentDidMount() {
        this.props.fetchContactsStorage()
    }
    
    render() {

        const dataSearch = e => {
            const value = e.target.value.toLowerCase();
                this.props.searchHandler(value)
        }

        return (
            <>
                <h1>Phonebook</h1>
                <div className={classes.phonebook__actions}>
                    <label>Поиск:</label>
                    <input 
                        value = {this.props.search}
                        placeholder="Введите имя" 
                        onChange={dataSearch}
                        />
                    <button onClick={e => {
                        this.showModal(e)
                    }}>Добавить контакт</button>
                </div>
                <ListContacts />
                <Modal onClose={this.showModal} show={this.state.show} />
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        contacts: state.phonebook.contacts,
        search: state.phonebook.search
    }
}

function mapDispathToProps(dispatch) {
    return {
        fetchContactsStorage: () => dispatch(fetchContactsStorage()),
        searchHandler: search => dispatch(searchHandler(search))
    }
}

export default connect(mapStateToProps, mapDispathToProps)(phonebook)