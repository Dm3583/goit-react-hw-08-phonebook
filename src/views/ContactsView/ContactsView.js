import React, { Component } from 'react';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactsList from '../../components/ContactsList';

class ContactsView extends Component {
  state = {
    isModalOpen: false,
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm buttonLabel="Add contact" />
        <Filter />
        <h2>Contacts</h2>
        <ContactsList />
      </>
    );
  }
}

export default ContactsView;
