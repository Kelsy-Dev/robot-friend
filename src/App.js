import React, {Component} from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import Searchbox from "./searchbox";



class App extends Component{
    constructor() {
        super()
        this.state = {
        Robots: robots,
        searchfield: ''
        }
    }
    render() {
    return (
        <div className="tc">
            <h1>RoboFriends</h1>
            < Searchbox />
            <CardList robots={ this.state.robots} />
        </div>
    ); 
    }
}

export default App;