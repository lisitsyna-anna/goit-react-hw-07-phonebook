import PropTypes from 'prop-types';
import { HiPhone } from 'react-icons/hi';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import { Button } from 'components/ContactForm/ContactForm.styled';
import { StyledText } from './ContactItem.styled';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => Notify.success('Contact deleted!'))
      .catch(() =>
        Notify.failure('Something went wrong...Try reloading the page')
      );
  };
  return (
    <>
      <StyledText>
        <HiPhone size={16} />
        <b>{name}:</b> {phone}
      </StyledText>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
