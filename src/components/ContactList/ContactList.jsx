import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filterSlice';
import { selectContacts } from '../../redux/contactsSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const pattern = filter.toLowerCase().trim();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(pattern)
  );

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
