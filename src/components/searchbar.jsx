function SearchBar({ setSearchName }) {
  return (
    <input
      type="text"
      placeholder="Search by name"
      onChange={e => setSearchName(e.target.value)}
    />
  );
}
export default SearchBar;
