import React, { Component } from 'react';
import Recipe from './recipe';
import _ from 'lodash';

export default class RecipeList extends Component {
    constructor (props){
        super(props);
    }  

    render() {
        const recipeItems = () => {
            return _.values(this.props.recipes).map(recipe => {
                console.log(recipe);
                return (
                    <li key={"id"+ recipe.id}>
                        <Recipe ingredients = {recipe.ingredients}
                            id = {recipe.id}
                            title = {recipe.title}
                            editRecipe = {this.props.editRecipe}
                            deleteRecipe = {this.props.deleteRecipe}/>
                    </li>
                );
            });
        } 
        return (
            <div>
                {recipeItems()}
            </div>
        )

    }
}