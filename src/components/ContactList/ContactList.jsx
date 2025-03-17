import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ savedContacts, onDeleteContact }) => {
  return (
    <div>
      {savedContacts.length === 0 ? (
        <p>No contacts available.</p>
      ) : (
        <ul className={css.contactList}>
          {savedContacts.map((savedContact) => (
            <li className={css.contactListItem} key={savedContact.id}>
              <Contact
                id={savedContact.id}
                name={savedContact.name}
                number={savedContact.number}
                onDeleteContact={onDeleteContact}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
