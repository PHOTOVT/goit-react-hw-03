import css from "./Contact.module.css";

import { IoPersonOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi2";

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <div className={css.contactItemContainer}>
        <span className={css.contactItemInfo}>
          <IoPersonOutline className={css.IoPersonOutline} />
          {name}
        </span>
        <span className={css.contactItemInfo}>
          <HiOutlinePhone className={css.HiOutlinePhone} />
          {number}
        </span>
      </div>
      <button
        className={css.contactButton}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
