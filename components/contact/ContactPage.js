import React from 'react';
import { observable }  from 'mobx';
import {inject, observer} from 'mobx-react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

@inject('store')
@observer
class ContactPage extends React.Component {
    
    @observable contact = {name: '', email: ''};

    constructor(props, context) {
        super(props, context);
        
        this.updateContactState = this.updateContactState.bind(this);
        this.saveContact = this.saveContact.bind(this);
    }

    updateContactState(event) {
        const field = event.target.name;
        const newValue = event.target.value;
        this.contact[field] = newValue;
    }

    saveContact(event) {
        event.preventDefault();
        this.props.store.addContact(this.contact);
        this.contact = {name: '', email: ''};
    }

    render() {
        return (
            <div>
                <ContactForm contact={this.contact} onChange={this.updateContactState} onSave={this.saveContact}/>
                <ContactList contacts={this.props.store.contacts} />
            </div>
        );
    }
}
export default ContactPage;