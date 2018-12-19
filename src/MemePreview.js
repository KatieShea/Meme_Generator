import React, { Component } from 'react';
import './MemePreview';

class MemePreview extends Component {
    render() {
        const { image, topText, bottomText} = this.props;
        return (
            <div className = "memePreview">
                 <div className = "mainImage">
                    {topText}
                    <img src= {image}/>
                    {bottomText}
                 </div>
            </div>
        );
    }
}

export default MemePreview;