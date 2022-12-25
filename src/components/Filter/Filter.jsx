import { HiSearch } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

import { nanoid } from 'nanoid';
import { Container } from 'components/Container';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const filterId = nanoid();
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <Container
      as="div"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Label htmlFor={filterId}>
        <HiSearch />
        Find contacts by name
      </Label>
      <Input
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        id={filterId}
      />
    </Container>
  );
};
