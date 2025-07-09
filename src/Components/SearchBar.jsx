function SearchBar({ searchItem, onSearchChange }) {
  return (
    <>
      <input
        type="text"
        placeholder="Search Characters by Name"
        className="form-control mb-3 searchBar"
        value={searchItem}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </>
  );
}

export default SearchBar;
