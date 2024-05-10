import { useDispatch } from 'react-redux';
import { MdAccountBox, MdCall } from 'react-icons/md';
import { deleteContact } from '../../redux/contactsOps';
import css from '../Contact/Contact.module.css';

const Contact = ({ contactItem: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <p className={css.contactItem}>
          <MdAccountBox className={css.contactIcon} size={24} /> {name}
        </p>
        <p className={css.contactItem}>
          <MdCall className={css.contactIcon} size={24} /> {number}
        </p>
      </div>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </>
  );
};

export default Contact;
