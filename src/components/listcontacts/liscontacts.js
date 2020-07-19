import React from 'react'
import classes from '../phonebook.module.css'
import {removeContactLocal} from '../../store/actions/phonebook'
import { connect } from 'react-redux';
import Pagination from './Pagination/Pagination';

class listcontacts extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            postsPerPage: 10,
            currentPage: 1
        }
    }

    removeContactHandler(contact) {
        this.props.removeContactLocal(contact)
    }

    
    currentPosts() { 
        return this.props.contacts.map(con => {
            return (
                <li>con</li>
            )
        })
    }

    render() {

    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;

    const paginate = pageNumber => {
        this.setState({
            currentPage: pageNumber
        })
    };

    const listContacts = this.props.contacts
        .filter(contact => { 
          return contact.name.toLowerCase().startsWith(this.props.search.toLowerCase())
        })
        .slice(indexOfFirstPost, indexOfLastPost)

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

                        {listContacts
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
                <Pagination 
                    postsPerPage={this.state.postsPerPage}
                    totalPosts={this.props.contacts.length}
                    paginate={paginate} />
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