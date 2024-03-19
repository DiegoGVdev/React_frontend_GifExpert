import { useState } from "react";
import PropTypes from 'prop-types'
import styles from '../styles/AddCategory.module.css'



export const AddCategory = ({ setCategories }) => {
  
  const [inputValue, setInputValue] = useState("Hola Mundo");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCleanerClick = () => {
    if (inputValue === "Hola Mundo") {
      setInputValue("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [ inputValue, ...cats]);
      setInputValue('')
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onClick={handleCleanerClick}
      />
      {/* <h1>{inputValue}</h1> */}
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}