const SearchBar = ({ search, setSearch }) => (
  <div style={{ margin: '1rem' }}>
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search jobs..."
      style={{ width: '100%', padding: '0.5rem' }}
    />
  </div>
);

export default SearchBar;
