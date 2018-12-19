import React, { Component } from 'react';
import ImagePicker from './ImagePicker';
import MemePreview from './MemePreview';
import TextInput from './TextInput';
import './MemeEditor.css';

class MemeEditor extends Component{
    constructor(){
        super();
        this.state={
            image: "/Images/Bird.jpeg",
            topText: 'hi',
            bottomText: 'Bottom'
        }
    }
    selectImage = (e) => {
        //console.log(e.target.src);
        this.setState({image: e.target.src})
    }
    setTopText = (e) => {
        const newTopText = e.target.value;
        this.setState({topText: newTopText})
    }

    setBottomText = (e) => {
        const newBottomText = e.target.value;
        this.setState({bottomText: newBottomText})
    }
    
    
    render(){
       // const { defaultImage } = this.state;
        return (
            <div className = "Container">
                <ImagePicker className = "imagePicker"
                selectImage={this.selectImage}
                />
                <MemePreview className = "memePreview"
                image={this.state.image}
                topText={this.state.topText}
                bottomText={this.state.bottomText}
                />
                <TextInput className = "textInput"
                setTopText={this.setTopText}
                setBottomText={this.setBottomText}
                topText={this.state.topText}
                bottomText={this.state.bottomText}
                />
            </div>
        );
    }
}
export default MemeEditor;