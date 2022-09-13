import PropTypes from 'prop-types';
import { ListItem } from './ContactItem.styled';
const ContactItem = ({ id, name, phone, onDeleteContact }) => {
  return (
    <ListItem key={id}>
      <p>{name}:</p>
      <p>{phone}</p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </ListItem>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      createdAt: PropTypes.string,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      onDeleteContact: PropTypes.func.isRequired,
    })
  ),
};
export default ContactItem;
