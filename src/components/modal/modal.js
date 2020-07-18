import React from "react";
import classes from "./modal.module.css";
import { connect } from 'react-redux';
import { addContactHandler } from '../../store/actions/phonebook' 
import FormErrors from './FormErrors/FormErrors'

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            dublicate: false,
            formErrors: {name: '', phone: ''},
            nameValid: false,
            phoneValid: false,
            formValid: false
        };
    
        this.handleUserInput = this.handleUserInput.bind(this);


      }

    handleUserInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({[name]: value}, 
            () => { this.validateField(name, value) })
      }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let phoneValid = this.state.phoneValid;
        switch(fieldName) {
            case 'name':
                nameValid = value.match(/[a-zA-Zа-яёА-ЯЁ]/g);
                fieldValidationErrors.name = nameValid ? '' : ' Не корретное имя (Вводите только кириллицу и латинницу )';
                break;
            case 'phone':
                phoneValid = value.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g)
                fieldValidationErrors.phone = phoneValid ? '': ' Не корректный номер';
                break;
            default:
                break;
            }
            this.setState({formErrors: fieldValidationErrors,
                            nameValid: nameValid,
                            phoneValid: phoneValid
                        }, this.validateForm);
    }
    validateForm() {
        this.setState({formValid: this.state.nameValid &&
                                  this.state.phoneValid});
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
                <label for="name">Имя</label>
                <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleUserInput} placeholder="Введите имя" />
                <label for="phone">Номер</label>
                <input type="text" id="phone" name="phone" value={this.state.phone} onChange={this.handleUserInput} placeholder="Введите номер"/>
            </div>
            
            <div >
                <FormErrors formErrors={this.state.formErrors} />
            </div>

            <div className={classes.modal__actions}>
                <button disabled={!this.state.formValid} onClick={this.save}>
                    Лобавить
                </button>
                <button  onClick={this.onClose}>
                    Закрыть
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

