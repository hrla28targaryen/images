import React from 'react';
import style from "./thumbImagesEntry.css";

const ThumbImagesEntry = (props) => (
  <a className={style.container}>
    <img src={props.image.imgUrl} width="85" height="127.73"  />
  </a>
);

export default ThumbImagesEntry;