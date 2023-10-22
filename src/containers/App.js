import React, { useEffect, useState } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import './App.css';


function App() {

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        fetch("https://jsonplaceholder.cypress.io/users")
            .then(response => {
                return response.json();
            })
            .then(users => {
                setRobots(users);
            });
    }, [])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
        console.log(event.target.value);
    }

        
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if (!robots.length) {
        return <h1>Loading</h1>
    } else {
        return (
            <div className='tc'>
                <Header />
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
    }
      
    
}

export default App;