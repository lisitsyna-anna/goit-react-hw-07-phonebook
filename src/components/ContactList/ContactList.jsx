import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

import { ContactItem } from 'components/ContactItem';
import { List, Item, FailureText } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      {contacts.length === 0 && (
        <FailureText>There is no such contact</FailureText>
      )}
      <List>
        {contacts.map(({ id, name, phone }) => {
          return (
            <Item key={id}>
              <ContactItem id={id} name={name} phone={phone} />
            </Item>
          );
        })}
      </List>
    </>
  );
};
