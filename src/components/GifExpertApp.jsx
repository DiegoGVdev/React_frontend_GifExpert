import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";
import styles from '../styles/main.module.css'



const {container, title} = styles

const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(["one punch"]);
  

  return (
    <div className={container}>
      <h2 className={title}> GifExpertApp </h2>
      <AddCategory setCategories={setCategories} />
      {/* <hr /> */}

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
