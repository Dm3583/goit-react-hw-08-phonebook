import React, { Component } from 'react';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactsList from '../../components/ContactsList';
import Modal from '../../components/Modal';

class ContactsView extends Component {
  state = {
    isModalOpen: false,
    contactId: null,
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  setContactId = id => {
    console.log('ID: ', id);
    this.setState({ contactId: id });
  };

  getContactId = () => {
    return this.state.contactId;
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm buttonLabel="Add contact" />
        <Filter />
        <h2>Contacts</h2>
        <ContactsList
          toggleModal={this.toggleModal}
          setContactId={this.setContactId}
        />
        {isModalOpen && (
          <Modal onClose={this.toggleModal}>
            <ContactForm
              buttonLabel="Update contact"
              toggleModal={this.toggleModal}
              getContactId={this.getContactId}
              updateContact
            />
          </Modal>
        )}
      </>
    );
  }
}

export default ContactsView;
