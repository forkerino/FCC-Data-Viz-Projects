import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RecipeList from './components/recipe_list';
import Modal from './components/modal';
require('./style.scss');

class App extends Component {
    constructor (props){
        super(props);

        this.state={
            recipes: [
                {
                    title: "Apple Pie",
                    ingredients: ["Apple","Sugar","Butter","Flour","Cinnamon"]
                },
                {
                    title: "Brownies",
                    ingredients: ["Chocolate", "Butter", "Flour", "Sugar"]
                }
            ],
            isModalOpen: false, 
            modal: {}

        }
        this.addRecipe = this.addRecipe.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    addRecipe() {
        this.setState({modal: {title:"Add Recipe"}, isModalOpen: true});
    }

    closeModal() {
        this.setState({isModalOpen: false});
    }

    editRecipe() {
        alert('edit');
    }
    deleteRecipe() {
        alert('delete');
    }

    render() {
        return (
            <div>
                <Modal isModalOpen={this.state.isModalOpen} closeModal={this.closeModal} modalContent={this.state.modal}/>
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
