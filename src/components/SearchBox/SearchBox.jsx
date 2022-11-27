import { SearchForm, Input, Button, ButtonLabel } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  return (
    <SearchForm onSubmit={onSubmit}>
      <Input
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <Button type="submit">
        <ButtonLabel>Search</ButtonLabel>
      </Button>
    </SearchForm>
  );
};
