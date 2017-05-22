import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RecipeList from './components/recipe_list';
import Modal from './components/modal';
import _ from 'lodash';
require('./style.scss');

class App extends Component {
    constructor (props){
        super(props);

        this.state={
            recipes: {
                    1: {
                        id: 1,
                        title: "Apple Pie",
                        ingredients: ["Apple","Sugar","Butter","Flour","Cinnamon"]
                    },
                    2: {
                        id: 2,
                        title: "Brownies",
                        ingredients: ["Chocolate", "Butter", "Flour", "Sugar"]
                    }
            },
            isModalOpen: false, 
            modal: {}

        }
        this.addRecipe = this.addRecipe.bind(this);
        this.editRecipe = this.editRecipe.bind(this);
        this.saveRecipe = this.saveRecipe.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.deleteRecipe = this.deleteRecipe.bind(this);
    }

    addRecipe() {
        this.setState({modal: {title:"Add Recipe"}, isModalOpen: true});
    }

    closeModal() {
        this.setState({isModalOpen: false});
    }

    saveRecipe(e, name, ingredients, id = Math.floor(Math.random()*100000)){
        e.preventDefault();
        let newRecipes = Object.assign({}, this.state.recipes, {[id]: {title: name, ingredients: ingredients.split(',').map(e=>e.trim())}});
        this.setState({recipes: newRecipes, isModalOpen: false});
    }

    editRecipe(id, e) {
        if (id) {
            this.setState({modal: {recipe: this.state.recipes[id].title, ingredients: this.state.recipes[id].ingredients, title: "Edit Recipe", id: id}, isModalOpen: true});
        } 
    }

    deleteRecipe(id, e) {
        let newState = {
            recipes: _.omit(this.state.recipes, id),
            isModalOpen: false
        }
        this.setState(newState);
    }

    render() {
        return (
            <div>
                <Modal isModalOpen={this.state.isModalOpen} closeModal={this.closeModal} saveRecipe={this.saveRecipe} modalContent={this.state.modal}/>
                <RecipeList recipes={this.state.recipes}
                    editRecipe={this.editRecipe}
                    deleteRecipe={this.deleteRecipe}/>
                <button onClick={this.addRecipe}>Add recipe</button>
                <a id="github" href="https://github.com/forkerino" target="_blank"><img src="https://cdn.iconscout.com/public/images/icon/free/png-128/github-brand-logo-3c9d78d3a4407227-128x128.png"/></a>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('container'));
