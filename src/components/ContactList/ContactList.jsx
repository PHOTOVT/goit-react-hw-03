import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <div>
      <ul className={css.contactList}>
        <Contact
          filteredContacts={filteredContacts}
          onDeleteContact={onDeleteContact}
        />
      </ul>
    </div>
  );
};

export default ContactList;
