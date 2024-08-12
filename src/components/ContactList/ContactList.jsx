import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ savedContacts, onDeleteContact }) => {
  return (
    <div>
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
    </div>
  );
};

export default ContactList;
