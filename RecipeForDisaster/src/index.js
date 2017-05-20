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
            isModalOpen: false
        }
        this.addRecipe = this.addRecipe.bind(this);
    }

    addRecipe() {
        console.log(this);
        this.setState({isModalOpen: true});
    }

    render() {
        return (
            <div>
                <Modal isModalOpen={this.state.isModalOpen}/>
                <RecipeList recipes={this.state.recipes}/>
                <button onClick={this.addRecipe}>Add recipe</button>
                <a id="github" href="https://github.com/forkerino" target="_blank"><img src="https://cdn.iconscout.com/public/images/icon/free/png-128/github-brand-logo-3c9d78d3a4407227-128x128.png"/></a>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('container'));
