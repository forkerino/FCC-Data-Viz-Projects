import React, {Component} from 'react';

export default class SearchBox extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }
    
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTerm(term);
    }

    render() {
        return (
            <input 
                onChange={event => this.onInputChange(event.target.value)} 
                value={this.state.term}
                placeholder="Search a user..."/>
        );
    }
}