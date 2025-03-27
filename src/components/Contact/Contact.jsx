import css from "./Contact.module.css";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";

export default function Contact({ name, number, onDelete, id }) {
  return (
    <li className={css.item}>
      <div className={css.contact}>
        <div className={css.info}>
          <BsFillPeopleFill />
          <p>{name}</p>
        </div>
        <div className={css.info}>
          <FaPhoneVolume />
          <p>{number}</p>
        </div>
      </div>
      <button className={css.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}
