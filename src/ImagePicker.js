import React, { Component } from 'react';
import './ImagePicker.css';
// import Images from '../Images';

class ImagePicker extends Component {
    render() {
        const { selectImage } = this.props;
        console.log(selectImage)
        return (
            <div className = "imagePicker" >
              <img src="/Images/Bird.jpeg" onClick={selectImage}/>
              <img src="Images/Cat.jpg" onClick={selectImage}/>
              <img src="/Images/Dog.jpeg" onClick={selectImage}/>
              <img src="/Images/Girl.jpg" onClick={selectImage}/>
            </div>
        );
    }
}

export default ImagePicker;