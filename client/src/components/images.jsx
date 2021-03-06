import React, { Component } from 'react';
import axios from 'axios';
import Zoom from './zoom.jsx';
import Thumbnail from './thumbnail.jsx';
import SkyLight from 'react-skylight';

import style from './images.css'


export default class Images extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageZoom: '',
            reviewThumb: '',
            imagesViewPort: [],
            reviewImages: [],
            count: 0,
            clickModal: false,
            rCount: 1
        }
        this.handleClick = this.handleClick.bind(this)
        this.enter = this.enter.bind(this)
        this.exit = this.exit.bind(this)
        this.stalker = this.stalker.bind(this)
        this.downClick = this.downClick.bind(this)
        this.upClick = this.upClick.bind(this)
        this.modal = this.modal.bind(this)
    }

    componentDidMount() {
        this.getDress()
    }

    getDress() {
        function getProd(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        let id = getProd(3)
        axios
        .get(`/api/images/${id}`)
        .then(({data}) =>
            this.setState({
            imageZoom: data[0].images[0],
            reviewThumb: data[0].reviewImages[0],
            imagesViewPort: data[0].images,
            reviewImages: data[0].reviewImages
            }))
    }

    modal() {
        this.simpleDialog.show()
        // this.setState({
        //     clickModal: true
        // })
    }

    // exitModal() {
    //     this.setState({
    //         clickModal: false
    //     })
    // }

    leftClick() {
        this.setState({
            rCount: this.state.rCount - 1
        })
    }

    rightClick() {
        this.setState({
            rCount: this.state.rCount + 1
        })
    }

    downClick(e) {
        let pic = document.getElementById(`image${this.state.count}`)
        pic.style.display = 'none'
        this.setState({
            count: this.state.count + 1
        })
    }

    upClick(e) {
        let pic = document.getElementById(`image${(this.state.count - 1)}`)
        pic.style.display = 'block'
        this.setState({
            count: this.state.count - 1
        })
    }

    handleClick(image) {
        this.setState({
          imageZoom: image
        })
    }

    enter(e) {
        let image = document.getElementById(e.target.id)
        image.style.transform = 'scale(2.4)'
    }

    exit(e) {
        let image = document.getElementById(e.target.id)
        image.style.transform = 'scale(1)'
    }

    stalker(e) {
        let image = document.getElementById(e.target.id)
        image.style.transformOrigin = `${e.pageX - 110}px ${e.pageY}px`
    }

    render () {
        return (
            <div>
                <Thumbnail imagesViewPort={this.state.imagesViewPort} reviewThumb={this.state.reviewThumb} 
                clickBoi={this.handleClick} downClick={this.downClick} upClick={this.upClick} count={this.state.count} modal={this.modal}/>
                <Zoom image={this.state.imageZoom} enter={this.enter} exit={this.exit} stalker={this.stalker}/>         
                <SkyLight className={style.dontHateMeTracy} hideOnOverlayClicked ref={ref => this.simpleDialog = ref}>
                        <div className={style.modalBox}>
                        {this.state.rCount > 1 &&
                         <div className={style.leftPrev} onClick={() => this.leftClick()}><span className={style.leftArrow} >
                         </span></div>}
                        <img className={style.pic} src={this.state.reviewImages[this.state.rCount]}/>
                        {((this.state.reviewImages.length - 1) > this.state.rCount) &&
                        <div className={style.rightNext} onClick={()=> this.rightClick()}><span className={style.rightArrow} >
                        </span></div>} 

                    </div>
                </SkyLight>
            </div>
        );
    }

}


// {this.state.clickModal && 
//     <div onClick={() => this.exitModal()} className={style.modalBackground}>
//     <div className={style.leftPrev}><span className={style.leftArrow}></span></div>
//     <div className={style.popUp}>
    
//     </div>
//     <div className={style.rightNext}><span className={style.rightArrow}></span></div>
//     </div>}

