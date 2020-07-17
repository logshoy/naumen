import React from "react";
import classes from "./modal.module.css";
import { connect } from 'react-redux';
import { addContactHandler } from '../../store/actions/phonebook'

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            dublicate: false
        };
    
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);

      }

    handleChangeName(event) {
        this.setState({name: event.target.value});
    }

    handleChangePhone(event) {
        this.setState({phone: event.target.value});
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    }

    dublicate = () => {
        return (
            <h1>КОНТАКТ УЖЕ ЕСТЬ</h1>
        )
    }

    save = () => {
        if (this.props.contacts.filter(item => { 
          return  item.name.toLowerCase() === this.state.name.toLowerCase() 
          || item.phone.toLowerCase() === this.state.phone.toLowerCase()
        }).length > 0)
        {   
            this.setState({dublicate: true});
        } else {
            this.onClose()
            this.props.addContactHandler(this.state.name,this.state.phone)
            this.setState({
                name: '',
                phone: '',
                dublicate: false
            });
        }
        
    }

    render() {
        if (!this.props.show) {
        return null;
        }
        return (
        <div className={classes.modal}>
            <h2>Modal Window</h2>
            <div>{ this.state.dublicate 
                ? <h1>ЭТО КОНТАКТ УЖЕ ЕСТЬ</h1>
                : null }</div>
            <div className={classes.modal__input}>
                <label>Имя</label>
                <input value={this.state.name} onChange={this.handleChangeName} placeholder="Введите имя" />
                <label>Номер</label>
                <input value={this.state.phone} onChange={this.handleChangePhone} placeholder="Введите номер"/>
            </div>

            <div >
            <button onClick={this.save}>
                Сохранить
            </button>
            <button onClick={this.onClose}>
                close
            </button>
            </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        contacts: state.phonebook.contacts
    }
}

function mapDispathToProps(dispatch) {
    return {
        addContactHandler: (name, phone) => dispatch(addContactHandler(name, phone))
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Modal)

