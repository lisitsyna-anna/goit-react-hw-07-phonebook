import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';
import { FadeLoader } from 'react-spinners';
import { fetchContacts } from 'redux/operations';

import { Container } from 'components/Container';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { PageTitle, SectionTitle, Text } from './App.styled';

export function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container as="main">
      <Container
        as="div"
        maxWidth={1250}
        pl={15}
        pr={15}
        ml={'auto'}
        mr={'auto'}
      >
        <Container
          as="div"
          width={700}
          ml={'auto'}
          mr={'auto'}
          backgroundColor={'white'}
          p={40}
        >
          <PageTitle>Phonebook</PageTitle>

          <Container as="section" pt={30} pb={30}>
            <ContactForm />
          </Container>

          <Container as="section" pt={30} pb={30}>
            <SectionTitle>Contacts</SectionTitle>
            {contacts.length > 1 && <Filter />}

            {isLoading && !error && (
              <FadeLoader
                color="#2196F3"
                cssOverride={{
                  display: 'block',
                  margin: '0 auto',
                }}
              />
            )}
            {contacts.length > 0 && <ContactList />}
            {contacts.length === 0 && !isLoading && !error && (
              <Text>Your phonebook is empty. Please add contact.</Text>
            )}
            {error && (
              <div style={{ margin: '0 auto', width: 400 }}>
                Something went wrong...Try reloading the page
              </div>
            )}
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
