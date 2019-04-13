import React from 'react'
import style from "./zoom.css";



const Zoom = (props) => (
    <div className={style.container} > 
            <img src={props.image} className={style.box} id='zoomPic'
            onMouseOver={(e) => props.enter(e)} onMouseOut={(e) => props.exit(e)} 
            onMouseMove={(e) => props.stalker(e)} />
    </div>
  ); 
  export default Zoom;  