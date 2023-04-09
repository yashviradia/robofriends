import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import { robots } from './robots';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }

    onSeachChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSeachChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;