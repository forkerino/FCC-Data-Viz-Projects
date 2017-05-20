import React, { Component } from 'react';
import Recipe from './recipe';

export default class RecipeList extends Component {
    constructor (props){
        super(props);
    }  

    render() {
        const recipes = this.props.recipes.map((recipe, i) => <Recipe key={i} recipe={recipe}/>);
        return (
            <div>
                {recipes}
            </div>
        )

    }
}