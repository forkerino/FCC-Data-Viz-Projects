import React, { Component } from 'react';
import Recipe from './recipe';

export default class RecipeList extends Component {
    constructor (props){
        super(props);

        this.recipes = this.props.recipes.map((recipe, i) => <Recipe key={i} recipe={recipe}/>);
    }  

    render() {
        return (
            <div>
                {recipes}
            </div>
        )

    }
}