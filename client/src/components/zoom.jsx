import React from 'react'
import style from "./zoom.css";


// onMouseOver={} onMouseOut={}
const Zoom = (props) => (
    <div className={style.container}>
                <img src={props.image}  width="424" height="636" />
             </div>
  ); 
  export default Zoom;