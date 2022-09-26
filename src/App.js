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

    searchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        
    }

    render() {
        const filterrobots = this.state.Robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
    return (
        <div className="tc">
            <h1>RoboFriends</h1>
            < Searchbox changes={this.searchChange}/>
            <CardList robots={ filterrobots } />
        </div>
    ); 
    }
}

export default App;