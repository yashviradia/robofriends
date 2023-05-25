import React, { Component } from 'react';
import Card from '../components/Card';
import './App.css';
import { robots } from '../robots';

class App extends Component {
    render() {
        return (
            <div>
                <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
                <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
                <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
            </div>
        )
    }
}

export default App;