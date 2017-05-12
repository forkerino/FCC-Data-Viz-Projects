import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CamperList from './components/camper_list';
import SearchBox from './components/search_box';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);

        this.state={};

        this.getTopAlltime = this.getTopAlltime.bind(this);
        this.getTopRecent = this.getTopRecent.bind(this);
        this.getTopAlltime();
    }

    getTopRecent() {
       axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
            .then(list=>this.setState({list: list.data}))
            .catch(err=>console.error(err)); 
    }

    getTopAlltime() {
        axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
            .then(list=>this.setState({list: list.data}))
            .catch(err=>console.error(err));
    }

    render() {
        return (
            <div>
                <SearchBox />
                <button onClick={this.getTopRecent}>Recent</button>
                <button onClick={this.getTopAlltime}>All time</button>
                <CamperList list={this.state.list}/>            
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('container'));