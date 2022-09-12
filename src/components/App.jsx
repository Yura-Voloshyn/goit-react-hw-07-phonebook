import { MainContainer } from './App.styled';

import ContactInputSection from './ContactInput';
import ContactListSection from './ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, removeContact } from '../redux/contacts/contacts-slice';
import { setFilter } from '../redux/filter/filter-slice';
import { getFilteredContacts } from '../redux/contacts/contacts-selectors';

const App = () => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(store => store.filter);
  const dispatch = useDispatch();

  const onAddContact = payload => {
    const action = addContact(payload);
    dispatch(action);
  };

  const onRemoveContact = payload => {
    dispatch(removeContact(payload));
  };

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <MainContainer>
      <ContactInputSection onSubmit={onAddContact} />

      <ContactListSection
        contacts={contacts}
        onDeleteContact={onRemoveContact}
        value={filter}
        onChange={onSetFilter}
      />
    </MainContainer>
  );
};
export default App;
