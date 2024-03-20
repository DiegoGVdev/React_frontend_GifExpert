import { useState } from "react";
import PropTypes from 'prop-types'
import styles from '../styles/AddCategory.module.css'



export const AddCategory = ({ setCategories }) => {

  const valueDefault  =  "Add Category"
  
  
  const [inputValue, setInputValue] = useState(valueDefault);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCleanerClick = () => {
    if (inputValue === valueDefault) {
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