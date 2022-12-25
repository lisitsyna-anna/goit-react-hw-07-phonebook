import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

import { Notify } from 'notiflix';
import { Form, Label, Input, Button } from './ContactForm.styled';

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        throw new Error("There isn't such option");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isNameAdded = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const isNumberAdded = contacts.some(contact => contact.phone === phone);

    if (isNameAdded) {
      Notify.failure(`${name} is alredy in contacts`);
      return;
    } else if (isNumberAdded) {
      Notify.failure(`${phone} is alredy in contacts`);
      return;
    }

    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Ivanov Ivan"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          maxLength={20}
          onChange={handleChange}
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          name="phone"
          value={phone}
          placeholder="111-11-111"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          maxLength={20}
          onChange={handleChange}
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
}
