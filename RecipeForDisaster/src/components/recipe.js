import React, {Component} from 'react';

export default class Recipe extends Component {
    constructor(props){
        super(props);

    }

    render(){
        const ingredients = this.props.ingredients.filter(e=>e!=="").map((ing,i) => <li key={i}>{ing}</li>);
        return (
            <div className="recipe">
                <h2 onClick={(e) => this.props.selectRecipe(this.props.id, e)}>{this.props.title}</h2>
                { this.props.selectedRecipe == this.props.id &&
                    <div>    
                        <div>
                            <ul>
                                {ingredients}
                            </ul>
                        </div>
                        <button className="edit" onClick={(e) => this.props.editRecipe(this.props.id, e)}>Edit</button>
                        <button className="delete" onClick={(e) => this.props.deleteRecipe(this.props.id, e)}>Delete</button>
                    </div>
                }
            </div>
        )
    }
}