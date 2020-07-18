import React from 'react'
import classes from '../phonebook.module.css'
import {removeContactLocal} from '../../store/actions/phonebook'
import { connect } from 'react-redux';
import Pagination from './Pagination/Pagination';

class listcontacts extends React.Component {

    removeContactHandler(contact) {
        this.props.removeContactLocal(contact)
    }

    render() {

    return (
        <> 
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

                    <Pagination />
                </div>
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
        removeContactLocal: contact => dispatch(removeContactLocal(contact))
    }
}

export default connect(mapStateToProps, mapDispathToProps)(listcontacts)