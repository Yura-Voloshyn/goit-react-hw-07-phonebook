import PropTypes from 'prop-types';
import { ListItem } from './ContactItem.styled';
const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ListItem key={id}>
      <p>{name}:</p>
      <p>{number}</p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </ListItem>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      onDeleteContact: PropTypes.func.isRequired,
    })
  ),
};
export default ContactItem;
