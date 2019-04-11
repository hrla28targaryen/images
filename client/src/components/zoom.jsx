import React from 'react'
import style from "./zoom.css";



const Zoom = (props) => (
    <div className={style.container} >
        <img src={props.image} id='zoomPic' width="424" height="636" 
        onMouseOver={(e) => props.enter(e)} onMouseOut={(e) => props.exit(e)} 
        onMouseMove={(e) => props.stalker(e)} />
    </div>
  ); 
  export default Zoom;  