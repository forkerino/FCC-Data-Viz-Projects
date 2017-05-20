import React, {Component} from 'react';

export default class Recipe extends Component {
    constructor(props){
        super(props);

    }

    render(){
        const ingredients = this.props.recipe.ingredients.map((ing,i) => <li key={i}>{ing}</li>);
        return (
            <div>
                <h2>{this.props.recipe.title}</h2>
                <ul>
                    {ingredients}
                </ul>
            </div>
        )
    }
}