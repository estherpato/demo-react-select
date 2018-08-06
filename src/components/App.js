import React, { Component } from 'react';
import Formulario from './Formulario';
import Preview from './Preview';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillOptions: [], // array donde guardo las skills del fetch

      optionSelected: '', // state donde guardo el value que selecciono en select
      optionsOnCard: [], // array donde guardo el optionSelected al pulsar el botón

      buttonIcon: '+'
    }

    this.handleButton = this.handleButton.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

    this.getSkills();
  }

  handleSelect(event) {
    this.setState({
      optionSelected: event.target.value,
    })
  }

  handleButton(event) {
    event.preventDefault();
    // lógica para cambiar el signo del botón
    this.setState((prevState, props) => ({
      buttonIcon: (prevState.buttonIcon === '+') ? '-' : '+'
    }));
    // lógica para añadir o quitar skills de la tarjeta
    if (this.state.buttonIcon === '+') {
      this.setState({
        optionsOnCard: [...this.state.optionsOnCard, this.state.optionSelected]
      })
    } else {
      const array = [...this.state.optionsOnCard]; // make a separate copy of the array
      const index = array.indexOf(event.target.value)
      array.splice(index, 1);
      this.setState({ optionsOnCard: array });
    }
  }

  getSkills() {
    fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
      .then((response) => response.json())
      .then((jsonskills) => {
        this.setState({
          skillOptions: jsonskills.skills
        });
      });
  }


  render() {
    return (
      <div className="App">
        <Formulario
          skillOptions={this.state.skillOptions}
          buttonIcon={this.state.buttonIcon}
          handleButtonClick={this.handleButton}
          handleSelectChange={this.handleSelect}
        />

        <Preview pintar={this.state.optionsOnCard} />
      </div>

    );
  }
}

export default App;
