import React, {Component} from 'react';

export default class Modal extends Component {
    constructor (props){
        super(props);
    }

    render() {
        if (!this.props.isModalOpen) return null;
        return (
            
            <div id="modal">
                <h2>{this.props.modalContent.title}</h2>
                <form>
                    <label htmlFor="recipeName">Recipe</label>
                    <input value={this.props.modalContent.recipe} placeholder="Enter recipename" id="recipeName"/>
                    <label htmlFor="ingredients">Ingredients</label>
                    <input value={this.props.modalContent.ingredients} placeholder="Enter ingredients" id="ingredients"/>
                    <button type="submit">Save</button>
                    <button onClick={this.props.closeModal}>Close</button>
                </form>
            </div>
        )
    }
}