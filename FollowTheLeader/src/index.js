import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CamperList from './components/camper_list';
import SearchBox from './components/search_box';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);

        this.state={term: ""};

        this.getTopAlltime = this.getTopAlltime.bind(this);
        this.getTopRecent = this.getTopRecent.bind(this);
        this.getTopAlltime();
    }

    getTopRecent() {
       axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
            .then(list=>this.setState({list: list.data.filter(e=>e.username.toLowerCase().includes(this.state.term))}))
            .catch(err=>console.error(err)); 
    }

    getTopAlltime() {
        axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
            .then(list=>this.setState({list: list.data.filter(e=>e.username.toLowerCase().includes(this.state.term))}))
            .catch(err=>console.error(err));
    }

    camperSearch(term) {
        this.setState({term: term.toLowerCase()});
        this.getTopAlltime();
    }

    render() {
        return (
            <div>
                <SearchBox onSearchTerm={term => this.camperSearch(term)}/>
                <button onClick={this.getTopRecent}>Recent</button>
                <button onClick={this.getTopAlltime}>All time</button>
                <CamperList list={this.state.list}/>            
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('container'));