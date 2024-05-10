import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(item => {
        return (
          <li className={css.contactBox} key={item.id}>
            <Contact contactItem={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
