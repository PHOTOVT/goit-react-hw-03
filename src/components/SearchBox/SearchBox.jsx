import css from "./SearchBox.module.css";

const Searchbox = ({ filter, handleFilter }) => {
  return (
    <div>
      <label className={css.searchBoxLabel}>Filter contacts by name:</label>
      <input
        className={css.searchBoxInput}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
};

export default Searchbox;
