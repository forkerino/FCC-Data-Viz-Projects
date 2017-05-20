import React, { Component } from 'react';
import Recipe from './recipe';

export default class RecipeList extends Component {
    constructor (props){
        super(props);
    }  

    render() {
        const recipes = this.props.recipes.map((recipe, i) => <Recipe 
            key={i} 
            recipe={recipe} 
            editRecipe={this.props.editRecipe}
            deleteRecipe={this.props.deleteRecipe}/>);
        return (
            <div>
                {recipes}
            </div>
        )

    }
}