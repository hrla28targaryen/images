import React, { Component } from 'react'
import Zoom from './zoom.jsx'
import Thumbnail from './thumbnail.jsx'


export default class Images extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageZoom: 'https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+1/Noni+Romper+1.jpg',
            images: [
            "https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+1/Noni+Romper+1.jpg", 
            "https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+1/Noni+Romper2.jpg",
            "https://s3-us-west-1.amazonaws.com/hrla28fecimages/Dress+1/Noni+Romper3.jpg"
            ]
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(image) {
        this.setState({
          imageZoom: image
        })
    }

    // enter() {
        
    // }

    // exit() {

    // }

    // stalker() {

    // }

    render () {
        return (
            <div>
                <Thumbnail images={this.state.images} clickBoi={this.handleClick}/>
                <Zoom image={this.state.imageZoom}/>
            </div>
        );
    }

}