import React, { Component } from 'react';
import Select from './Select';

class Formulario extends Component {
    render() {
        return (
            <form action="">
                <Select 
                skillOptions={this.props.skillOptions} 
                handleButtonClick={this.props.handleButtonClick}
                handleSelectChange={this.props.handleSelectChange}
                buttonIcon={this.props.buttonIcon}
                />
            </form>
        );
    }
}

export default Formulario;