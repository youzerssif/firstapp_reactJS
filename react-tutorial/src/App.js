// import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Form from './Form';
import Api from './Api';
import { Component } from 'react';




class App extends Component {

  state = {
    characters: [],
  }
  removeCharacter = (index) => {
    const {characters} = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }

  render() {

    const { characters } = this.state

    return (
      <div className="App">
        <h1>Hello, React!</h1>
        <div className="container">
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
          <Form handleSubmit={this.handleSubmit} />
          <Api />
        </div>
      </div>
      
    )
  }
}

export default App;
