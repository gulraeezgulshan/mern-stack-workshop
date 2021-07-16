import React from "react";
import defaultImage from "../../assets/default-image.jpeg";
import PropTypes from "prop-types";

const Product = ({ image, name, price }) => {
  const url = image && image.url;

  return (
    <article>
      <img src={url || defaultImage} height={100} />
      <h4>{name}</h4>
      <p>{price || 0.0}</p>
    </article>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
