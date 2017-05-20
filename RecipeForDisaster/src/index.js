import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RecipeList from './components/recipe_list';
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
            ]
        }
    }

    render() {
        return (
            <div>
                <RecipeList recipes={this.state.recipes}/>
                <a id="github" href="https://github.com/forkerino" target="_blank"><img src="https://cdn.iconscout.com/public/images/icon/free/png-128/github-brand-logo-3c9d78d3a4407227-128x128.png"/></a>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('container'));
