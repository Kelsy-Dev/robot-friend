import React, {Component} from "react";
import CardList from "./CardList";
import Searchbox from "./searchbox";
import Scroll from "./Scroll"





class App extends Component{
    constructor() {
        super()
        this.state = {
        Robots: [],
        searchfield: ''
        }
    }

    componentDidMount() {
        fetch (`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(users => this.setState({Robots: users}));
        
    }

    searchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        
    }

    render() {
        const filterrobots = this.state.Robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.Robots.length === 0) {
            return <h1>Loading..</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f2">RoboFriends</h1>
                    < Searchbox changes={this.searchChange} />
                    <Scroll> 
                        <CardList robots = { filterrobots } />
                    </Scroll>
                </div>
            ); 
        }
    
    }
}

export default App;