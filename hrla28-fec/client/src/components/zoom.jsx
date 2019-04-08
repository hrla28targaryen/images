import React, { Component } from 'react'
import style from "./zoom.css";

export default class Zoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: []
        }
    }

    render () {
        return (
            <div className={style.container}>
                 <img src="https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+1/Noni+Romper+1.jpg" width="424" height="636" />
            </div>
        );
    }

}