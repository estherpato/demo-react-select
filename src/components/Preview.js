import React, { Component } from 'react';
import './Preview.css'

class Preview extends Component {
    render() {
        return (
            <div className="preview">{this.props.pintar}</div>
        );
    }
}

export default Preview;