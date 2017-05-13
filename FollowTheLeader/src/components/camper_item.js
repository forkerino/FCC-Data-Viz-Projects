import React, {Component} from 'react';

export default class CamperItem extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <tr>
                <td className="position">{this.props.number}</td>
                <td>
                    <a href={`https://www.freecodecamp.com/${this.props.camper.username}`} target="_blank">
                        <img src={this.props.camper.img}/> 
                        <span>{this.props.camper.username}</span>
                    </a>
                </td>
                <td className="points">{this.props.camper.recent}</td>
                <td className="points">{this.props.camper.alltime}</td>
            </tr>

        )
    }
}