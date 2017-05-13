import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CamperList from './components/camper_list';
import SearchBox from './components/search_box';
import axios from 'axios';
require('./style.scss');

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
            .then(list=>{
                document.querySelector('.alltime').classList.remove('activesort')
                document.querySelector('.recent').classList.add('activesort')
                this.setState({list: list.data.filter(e=>e.username.toLowerCase().includes(this.state.term))})
            })
            .catch(err=>console.error(err)); 
    }

    getTopAlltime() {
        axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
            .then(list=>{
                document.querySelector('.alltime').classList.add('activesort')
                document.querySelector('.recent').classList.remove('activesort')
                this.setState({list: list.data.filter(e=>e.username.toLowerCase().includes(this.state.term))})
            })
            .catch(err=>console.error(err));
    }

    camperSearch(term) {
        this.setState({term: term.toLowerCase()});
        this.getTopAlltime();
    }

    render() {
        return (
            <div>
                <div id="header">
                    <img src='/style/freecodecamp_logo.svg'/>
                    
                    <SearchBox id="search" onSearchTerm={term => this.camperSearch(term)}/>
                </div>
                <h2 className="follow">Follow the leader...</h2>
                <table>
                    <thead>
                        <tr>
                            <th className="hash">#</th>
                            <th>camper name</th>
                            <th className="points recent" onClick={this.getTopRecent}>recent points</th>
                            <th className="points alltime" onClick={this.getTopAlltime}>all time points</th>
                        </tr>
                    </thead>
                    <CamperList list={this.state.list}/>         
                </table>
                <a id="github" href="https://github.com/forkerino" target="_blank"><img src="https://cdn.iconscout.com/public/images/icon/free/png-128/github-brand-logo-3c9d78d3a4407227-128x128.png"/></a>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('container'));