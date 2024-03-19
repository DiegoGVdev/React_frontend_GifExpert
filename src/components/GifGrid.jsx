import PropTypes from "prop-types";
import { GifGridItem } from "./GifGridItem";

import styles from "../styles/GifGrid.module.css";
import { useFetchGifs } from "../hooks/useFetchGifs";


const { cardGrid, container, title, content } = styles;

export const GifGrid = ({ category }) => {

  const {data:images, loading} = useFetchGifs({category});




  return (
    <div className={container}>
   
      <h3 className={title}>{category}</h3>

      {loading && <p>Loading ...</p>}

      <div className={cardGrid}>
        <ol className="content">
          {images.map((item) => (
            <GifGridItem key={item.id} {...item} />
          ))}
        </ol>
      </div>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
