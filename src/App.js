import React, {Component} from "react";
import './App.css';
import {CardList} from "./components/card-list/card-list.component";

class App extends Component {
    constructor() {
        //super() calls React.Component's constructor()
        super();
        this.state = {
            monsters: [ ],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}))
    }

    render() {
        //destructuring, the below is the same as: const monsters =this.state.monsters; const searchField = this.state.searchField;
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
        )
    return (
        <div className="App">
            <input type='search'
                   placeholder='search monsters'
                   onChange={event => this.setState({searchField: event.target.value}
                       )}/>
            <CardList monsters={filteredMonsters} />
        </div>
    );
  }
}

//Why use a component over a functional App? It gives easy access to state
//State is an object with properties
/*function FunctionalApp() {
  return (
    <div className="App">
    </div>
  );
}*/

export default App;
