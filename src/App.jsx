import { useState, useEffect } from "react";
import "./App.css";

import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import initialContacts from "../contacts.json";

const getStoredContacts = () => {
  try {
    const item = localStorage.getItem("contacts");
    return item ? JSON.parse(item) : initialContacts;
  } catch {
    return initialContacts;
  }
};

function App() {
  const [contacts, setContacts] = useState(getStoredContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (newContact) => {
    const fullContact = { ...newContact, id: nanoid() };
    setContacts((prevContacts) => [...prevContacts, fullContact]);
  };

  const onDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const handleFilter = ({ target: { value } }) => setFilter(value);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Welcome to the phonebook 🙋🏼‍♂️</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox filter={filter} handleFilter={handleFilter} />
      {filter.length > 0 && filteredContacts.length === 0 && (
        <p>No contacts found.</p>
      )}
      <ContactList
        savedContacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
