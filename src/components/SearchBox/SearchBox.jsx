import css from "./SearchBox.module.css";

export default function SearchBox({ value, onSearch }) {
  const handleInputChange = (event) => {
    onSearch(event.target.value); // // Обновляем состояние с новым значением из input
  };
  return (
    <div className={css.search}>
      <label htmlFor="search" className={css.label}>
        Find contacts by name
      </label>

      <input
        type="text"
        onChange={handleInputChange}
        // placeholder="Пошук за ім'ям"
        value={value}
      />
    </div>
  );
}
