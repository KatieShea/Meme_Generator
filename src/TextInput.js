import React, { Component } from 'react';
import './TextInput.css';

class TextInput extends Component {
    
    render() {
        const { setTopText, setBottomText, topText, bottomText } = this.props;
        return (
            <div className = "textInput">
                 Top
                 <input 
                    type="text"
                    value = {topText}
                    onChange={setTopText}
                />
                Bottom
                <input 
                    type="text"
                    value = {bottomText}
                    onChange={setBottomText}
                />
            </div>
        );
    }
}

export default TextInput;