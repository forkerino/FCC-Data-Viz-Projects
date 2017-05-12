import React, {Component} from 'react';

export default class SearchBox extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }
    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    render() {
        return (
            <input 
                onChange={this.onInputChange} 
                value={this.state.term}/>
        );
    }
}