import React from 'react'
import classes from './phonebook.module.css'
import { connect } from 'react-redux';
import Modal from './modal/modal'
import { fetchContactsStorage, removeContactLocal, searchHandler } from '../store/actions/phonebook'

class phonebook extends React.Component {

    state = { show: false };

    showModal = e => {
        this.setState({ show: !this.state.show });
    };

    componentDidMount() {
        this.props.fetchContactsStorage()
    }

    removeContactHandler(contact) {
        this.props.removeContactLocal(contact)
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
                <div className={classes.phonebook}>
                    <div className={classes.phonebook__header}>
                        <div>
                            Имя
                        </div> 
                        <div> 
                            Номер
                        </div>
                        <div> 
                            Действие
                        </div>
                    </div>
                    <ul className={classes.phonebook__list}>

                        {this.props.contacts
                        .filter(contact => { 
                          return contact.name.toLowerCase().includes(this.props.search.toLowerCase())
                        })
                        .sort(function (a, b) {
                            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                              return 1;
                            }
                            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                              return -1;
                            }
                            return 0
                        })
                        .map(contact => {
                            return (
                                <li 
                                key ={contact.id}
                                className={classes.phonebook__header}
                                >   
                                    <div>{contact.name}</div>
                                    <div>{contact.phone}</div>
                                    <div><button onClick={this.removeContactHandler.bind(this, contact)}>Удалить</button></div>
                                    
                                </li>
                            )
                        })}

                    
                        
                    </ul>
                </div>
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
        removeContactLocal: contact => dispatch(removeContactLocal(contact)),
        searchHandler: search => dispatch(searchHandler(search))
    }
}

export default connect(mapStateToProps, mapDispathToProps)(phonebook)