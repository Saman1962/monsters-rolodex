import {Component} from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({monsters: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})

    }

    render() {
        const {onSearchChange} = this;
        const filteredMonsters = this.state.monsters.filter(monster => {
            return monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })


        return (
            <div className="App">
                <h1 className="app-title">Monsters Rolodex</h1>
                <SearchBox className="monsters-search-box" onChangeHandler={onSearchChange} placeholder="search"/>
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
