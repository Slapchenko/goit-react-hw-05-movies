export const SearchBox = ({ query, onChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      {/* <form onSubmit={handleSubmit}> */}
      <input
        value={query}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={(e) => onChange(e.target.value)}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
    // <Wrapper>
    //   <Icon />
    //   <Input
    //     type="text"
    //     value={value}
    //     onChange={(e) => onChange(e.target.value)}
    //   />
    // </Wrapper>
  );
};
