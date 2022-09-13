import PropTypes from 'prop-types';
import { List, Title } from './ContactList.styled';
import Filter from 'components/Filter';
import ContactItem from '../ContactItem/ContactItem';

const ContactListSection = ({ contacts, onDeleteContact, value, onChange }) => (
  <section>
    <Title>Contacts</Title>
    <Filter value={value} onChange={onChange} />
    <List>
      {contacts.map(({ id, name, phone }) => (
        <ContactItem
          key={id}
          name={name}
          phone={phone}
          onDeleteContact={() => onDeleteContact(id)}
        />
      ))}
    </List>
  </section>
);
ContactListSection.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      createdAt: PropTypes.string,
    })
  ),
};
export default ContactListSection;
