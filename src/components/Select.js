import React, { Component } from 'react';

class Select extends Component {
    render() {
        const {skillOptions, handleButtonClick, handleSelectChange, buttonIcon} = this.props;
        return (
            <div>
                <select name="" id="" onChange={handleSelectChange}>
                    {skillOptions.map((skill, i) =>
                        <option
                            key={i}
                            value={skill}>
                            {skill}
                        </option>
                    )
                    }
                </select>

                <button onClick={handleButtonClick}>{buttonIcon}</button>
            </div>
        );
    }
}

export default Select;