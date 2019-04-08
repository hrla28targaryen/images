import React, { Component } from 'react'
import Zoom from './zoom.jsx'
import Thumbnail from './thumbnail.jsx'


export default class Images extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: []
        }
    }

    render () {
        return (
            <div>
                <Thumbnail />
                <Zoom />
            </div>
        );
    }

}