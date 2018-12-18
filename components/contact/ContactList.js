import React from 'react';
import {inject, observer} from 'mobx-react';
import ContactListRow from './ContactListRow'

@inject('store')
@observer
class ContactList extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.store.contacts.map(contact => 
                        <ContactListRow key={contact.id} contact={contact}/>
                    )}
                </tbody>
            </table>
        );
    }
};

export default ContactList;