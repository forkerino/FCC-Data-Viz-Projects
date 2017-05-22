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
        this.setState({recipeName: props.modalContent.recipe, ingredients: props.modalContent.ingredients, id: props.modalContent.id});
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
            
            <div id="modal">
                <h2>{this.props.modalContent.title}</h2>
                <form>
                    <label htmlFor="recipeName">Recipe</label>
                    <input 
                        value={this.state.recipeName} 
                        placeholder="Enter recipe name" 
                        id="recipeName"
                        onChange={this.updateName}/>
                    <label htmlFor="ingredients">Ingredients</label>
                    <input 
                        value={this.state.ingredients} 
                        placeholder="Enter ingredients" 
                        id="ingredients"
                        onChange={this.updateIngredients}/>
                    <button onClick={(e) => this.props.saveRecipe(e, this.state.recipeName, this.state.ingredients, this.state.id)}>Save</button>
                    <button onClick={this.props.closeModal}>Close</button>
                </form>
            </div>
        )
    }
}