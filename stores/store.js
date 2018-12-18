import { observable }  from 'mobx';

let store = null;

class Store {
    @observable contacts = [];

    addContact(contact) {
        this.contacts.push({
            id: this.contacts.length + 1,
            name: contact.name,
            email: contact.email
        })
        console.log('contacts', this.contacts);
    }
}

export function initializeStore(isServer) {
    if (isServer) {
      return new Store();
    } else {
      if (store === null) {
        store = new Store();
      }
      return store;
    }
}