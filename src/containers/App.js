import React, {Component} from "react";
import CardList from "../components/CardList";
//import {robots} from './robots'; //you can import multiple objects from './robots' because it has export instead of export default
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}));
    }

    onSearchChange = (event)=>{ // here we used the arrow notation to make this local instead of belonging to "input" in SearchBox
        this.setState({searchfield: event.target.value})        
    }

    render (){
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name
            .toLowerCase()
            .includes(this.state.searchfield.toLowerCase());
        });
        if(this.state.robots.length === 0){
            return <h1>Loading</h1>
        }
        else{        
            return (
              <div className="tc">
                <h1 className="f2">Robofriends</h1>

                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                  <ErrorBoundry>
                    <CardList robots={filteredRobots} />
                  </ErrorBoundry>
                </Scroll>
              </div>
            );
        }
    }
}

export default App;