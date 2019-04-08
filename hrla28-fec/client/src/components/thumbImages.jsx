import React from 'react';
import style from "./thumbImages.css";
import ThumbImagesEntry from './ThumbImagesEntry.jsx'

const ThumbImages = (props) => (
  <div className={style.container}>
    <div className={style.wrapper}>
      {/* {props.images.map((image, index) => (
        <ThumbImagesEntry image={image} />
      ))} */}
      <a className={style.imgWrapper}>
      <img src="https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+1/Noni+Romper+1.jpg" width="85" height="127.73" />
      </a>
      <a className={style.imgWrapper}>
      <img src="https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+1/Noni+Romper+2.jpg" width="85" height="127.73" />
      </a>
      <a className={style.imgWrapper}>
      <img src="https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+1/Noni+Romper+3.jpg" width="85" height="127.73" />
      </a>
    </div>  
  </div>
);

export default ThumbImages;