import React, {Component} from 'react';

export default class Modal extends Component {
    constructor (props){
        super(props);
    }
    closeModal() {
        
    }

    render() {
        if (!this.props.isModalOpen) return null;
        return (
            
            <div id="modal">
                <p>Modal</p>
                <button onClick={this.closeModal}>Close</button>
            </div>
        )
    }
}