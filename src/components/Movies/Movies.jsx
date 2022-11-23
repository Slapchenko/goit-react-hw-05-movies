export const Movies = () => {
  return (
    <>
      <main>
        <form>
        {/* <form onSubmit={handleSubmit}> */}
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            // onChange={handleChange}
          />
        </form>
      </main>
    </>
  );
};
