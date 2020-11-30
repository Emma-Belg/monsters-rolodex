import React, {Component} from "react";
import './App.css';
import {CardList} from "./components/card-list/card-list.component";

class App extends Component {
    constructor() {
        //super() calls React.Component's constructor()
        super();
        this.state = {
            monsters: [ ]
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}))
    }

    render() {
    return (
        <div className="App">
            <CardList monsters={this.state.monsters}>

            </CardList>
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
