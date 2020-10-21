import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './style.css'

export default class Recipe extends Component {
    constructor(props) {
        super(props)

        this.handleRemove = this.handleRemove.bind(this)
    }
    handleRemove(id) {
        if (window.confirm('Are you sure? Remove this Recipe')) {
            this.props.handleRemoveRecipe(id)
            this.props.history.push('/')
        }
    }

    render() {
        const {
            recipes,
            match
        } = this.props
        const recipe = recipes.find(item => item.id === match.params.id)
        if (recipe) {
            return (
                <div className="Recipe">
                    <div className="header">
                        <h2>{recipe.title}</h2>
                        <div>
                            <Link to={`/edit/${recipe.id}`}>Edit</Link>
                            <button className="remove-item" onClick={() => this.handleRemove(recipe.id)}>Remove</button>
                        </div>
                    </div>
                    <div>
                        <h3>Ingredients:</h3>
                        <ul>
                            {recipe.ingredients.map((item, index) => (<li key={index}>{item}</li>))}
                        </ul>
                    </div>
                    <div>
                        <h3>Directions:</h3>
                        <ol>
                            {recipe.directions.map((item, index) => (<li key={index}>{item}</li>))}
                        </ol>
                    </div>
                </div>
            )
        } else {
            return (
                <div>Loading...</div>
            )
        }
    }
}
