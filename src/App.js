import React, {Component} from "react";
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

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

    //can use arrow functions instead of explicitly binding (with bind(this)) because arrow functions have lexical scoping,
    //therefore they automatically bind 'this' to the place where the arrow function is defined which is
    //in this case, inside our App component.
    handleChange = (event) => {
        this.setState({searchField: event.target.value});
    }
    render() {
        //destructuring, the below is the same as: const monsters =this.state.monsters; const searchField = this.state.searchField;
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
        )
    return (
        <div className="App">
            <SearchBox
                placeholder='search monsters'
                handleChange={this.handleChange}
                />
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
