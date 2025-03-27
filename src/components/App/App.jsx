import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";
import { useState, useEffect } from "react";
import ContactList from "../ContactList/ContactList";
import * as Yup from "yup";
import users from "../../contacts.json"; // Імпортуємо дані з contacts.json

export default function App() {
  // Ініціалізація стану для контактів
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Завантаження контактів з локального сховища або contacts.json
  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    } else {
      setContacts(users);
    }
  }, []); // Порожній масив як залежність, щоб запустити тільки один раз

  // Фільтрація контактів
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Додавання нового контакту
  const addContact = (newContact) => {
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts)); // Зберігаємо оновлений список в локальне сховище
  };

  // Видалення контакту
  const deleteContact = (contactId) => {
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== contactId
    );
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts)); // Зберігаємо оновлений список в локальне сховище
  };

  // Повернення JSX
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox query={searchQuery} onSearch={setSearchQuery} />
      <ContactList contacts={filterContacts} onDelete={deleteContact} />
    </div>
  );
}
