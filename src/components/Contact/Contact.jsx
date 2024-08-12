import css from "./Contact.module.css";

import { IoPersonOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi2";

const Contact = ({ filteredContacts, onDeleteContact }) => {
  return (
    <>
      {filteredContacts.map((filteredContact) => (
        <li className={css.contactItem} key={filteredContact.id}>
          <div className={css.contactItemContainer}>
            <span className={css.contactItemInfo}>
              <IoPersonOutline className={css.IoPersonOutline} />
              {filteredContact.name}
            </span>
            <span className={css.contactItemInfo}>
              <HiOutlinePhone className={css.HiOutlinePhone} />
              {filteredContact.number}
            </span>
          </div>
          <button
            className={css.contactButton}
            type="button"
            onClick={() => onDeleteContact(filteredContact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

export default Contact;
