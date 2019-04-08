import React, { Component } from 'react'
import ThumbImages from './thumbImages.jsx';
import style from "./thumbnail.css";

export default class Thumbnail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: []
        }
    }

    render () {
        return (
            <div className={style.container} > 
                <img src="https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+1/Noni+review.JPG" width="82" height="180.65" className={style.review}/>
                <div className={style.thumbPrev}><span className={style.arrowPrev}></span></div>
                <ThumbImages />
                <div className={style.thumbNext}><span className={style.arrowNext}></span></div>
            </div>
        );
    }
}