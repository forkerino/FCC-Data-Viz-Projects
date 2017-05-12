import React, {Component} from 'react';

export default class CamperItem extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <li>
                {this.props.number}
                <a href={`https://www.freecodecamp.com/${this.props.camper.username}`} target="_blank">
                    <img src={this.props.camper.img} height="80px" width="80px"/> 
                    <p>{this.props.camper.username}</p>
                </a>
                <p>{this.props.camper.recent}</p>
                <p>{this.props.camper.alltime}</p>
            </li>

        )
    }
}