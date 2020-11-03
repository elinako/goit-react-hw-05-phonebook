import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import SearchInput from "./components/SearchInput";
import Alert from "./components/Alert";
import { CSSTransition } from "react-transition-group";
import AlertAnimation from "./components/AlertAnimation.module.css";
import styled from "styled-components";
uuidv4();

const Container = styled.div`
  font-family: sans-serif;
  font-size: 16px;
`;

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
    showAlert: false,
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    if (
      this.state.contacts.some(
        (item) => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      this.setState((state) => ({ showAlert: !state.showAlert }));
    } else {
      this.setState((prevState) => {
        return { contacts: [...prevState.contacts, contact] };
      });
    }
  };

  filterContacts = (filter) => {
    this.setState({
      filter: filter.target.value,
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = (searchId) => {
    const newContacts = this.state.contacts.filter(
      (contact) => contact.id !== searchId
    );
    this.setState({ contacts: newContacts });
    localStorage.removeItem(searchId);
  };

  render() {
    const { filter, contacts, showAlert } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <Container>
        <CSSTransition
          in={showAlert}
          onEntered={() => this.setState({ showAlert: false })}
          timeout={500}
          classNames={AlertAnimation}
          unmountOnExit
        >
          <Alert />
        </CSSTransition>

        <Form onSubmit={this.addContact} />
        {contacts.length > 1 && (
          <SearchInput
            value={filter}
            onChangeSearchInput={this.filterContacts}
          />
        )}
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }

  componentDidMount() {
    if (localStorage.length !== 0) {
      const contactsFromStorage = localStorage.getItem("contacts");
      this.setState({ contacts: JSON.parse(contactsFromStorage) });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState !== this.state) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
}
