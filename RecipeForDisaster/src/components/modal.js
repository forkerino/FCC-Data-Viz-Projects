import React, {Component} from 'react';

export default class Modal extends Component {
    constructor (props){
        super(props);

        this.state = {
            recipeName: "",
            ingredients: "",
            id: ""
        }

        this.updateName = this.updateName.bind(this);
        this.updateIngredients = this.updateIngredients.bind(this);
    }

    componentWillReceiveProps(props){
        if (props.modalContent.ingredients){
            this.setState({recipeName: props.modalContent.recipe, ingredients: props.modalContent.ingredients.join(', '), id: props.modalContent.id});
        } 
    }

    updateName(e){
        this.setState({recipeName: e.target.value});
    }

    updateIngredients(e){
        this.setState({ingredients: e.target.value});
    }

    render() {
        if (!this.props.isModalOpen) return null;
        return (
            <div>            
                <div id="modal">
                    <h2>{this.props.modalContent.title}</h2>
                    <form>
                        <label htmlFor="recipeName">Recipe</label>
                        <input 
                            value={this.state.recipeName} 
                            placeholder="Enter recipe name" 
                            id="recipeName"
                            onChange={this.updateName}/>
                        <label htmlFor="ingredients">Ingredients (separated by commas)</label>
                        <input 
                            value={this.state.ingredients} 
                            placeholder="Enter ingredients" 
                            id="ingredients"
                            onChange={this.updateIngredients}/>
                        <button id="save" onClick={(e) => this.props.saveRecipe(e, this.state.recipeName, this.state.ingredients, this.state.id)}>Save</button>
                        <button id="close" onClick={this.props.closeModal}>Close</button>
                    </form>
                </div>
                <div id="backdrop" onClick={this.props.closeModal}></div>
            </div>
        )
    }
}