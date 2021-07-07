import React from "react";
import "../assets/sass/components/gifGridItem.sass";

const GifGridItem = ({ title, url }) => {
  return (
    <figure className="card animate__animated animate__fadeIn">
      <img className="gif" src={url} alt={title} />
      <figcaption className="card-img__title">{title}</figcaption>
    </figure>
  );
};

export default GifGridItem;
