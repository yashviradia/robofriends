import React, { Component } from 'react';
import CardList from '../components/CardList';
import './App.css';
import { robots } from '../robots';

class App extends Component {
    render() {
        return (
            <CardList robots={robots} />
        )
    }
}

export default App;