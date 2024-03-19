import styles from "../styles/GifGridItem.module.css";
import PropTypes from "prop-types";

const { card } = styles;

export const GifGridItem = ({ title, url }) => {
  return (
    <div className={card}>
      <li>
        <h4>{title}</h4>
        <img src={url} alt="" />
      </li>
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.node.isRequired,
  url: PropTypes.node.isRequired,
};
