import { useState, useEffect } from "react";
import "./App.css";

import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import savedContacts from "../contacts.json";

function App() {
  const [contacts, setContacts] = useState(() => {
    const itemFromLocalStorage = localStorage.getItem("contacts");
    return itemFromLocalStorage
      ? JSON.parse(itemFromLocalStorage)
      : savedContacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (newContact) => {
    const fullContact = {
      ...newContact,
      id: nanoid(),
    };
    setContacts([fullContact, ...contacts]);
  };

  const onDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filter={filter} handleFilter={handleFilter} />
      <ContactList
        filteredContacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
