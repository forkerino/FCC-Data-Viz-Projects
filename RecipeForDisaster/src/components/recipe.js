import React, {Component} from 'react';

export default class Recipe extends Component {
    constructor(props){
        super(props);

    }

    render(){
        const ingredients = this.props.ingredients.map((ing,i) => <li key={i}>{ing}</li>);
        return (
            <div className="recipe">
                <h2 onClick={(e) => this.props.selectRecipe(this.props.id, e)}>{this.props.title}</h2>
                { this.props.selectedRecipe == this.props.id &&
                        <div>
                            <ul>
                                {ingredients}
                            </ul>
                            <button onClick={(e) => this.props.editRecipe(this.props.id, e)}>Edit</button>
                            <button onClick={(e) => this.props.deleteRecipe(this.props.id, e)}>Delete</button>
                        </div>
                }
            </div>
        )
    }
}