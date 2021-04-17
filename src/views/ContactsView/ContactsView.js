import React from 'react';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactsList from '../../components/ContactsList';

const ContactsView = () => (
  <>
    <h1>Phonebook</h1>
    <ContactForm />
    <Filter />
    <h2>Contacts</h2>
    <ContactsList />
  </>
);

export default ContactsView;
