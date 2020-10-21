import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';

import './style.css'

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.id || uuid(),
            title: this.props.title || '',
            ingredients: this.props.ingredients ? this.props.ingredients.join(' \\ ') : '',
            directions: this.props.directions ? this.props.directions.join(' \\ ') : '',
            errorMessage: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }
    handleSubmit(e) {
        const {
            id,
            title,
            ingredients,
            directions
        } = this.state
        e.preventDefault()
        if (title !== '' && ingredients !== '' && directions !== '') {
            const recipe = {
                id,
                title,
                ingredients: ingredients.split('\\'),
                directions: directions.split('\\')
            }
            if (this.props.type === 'create') {
                this.props.handleCreateRecipe(recipe)
                this.props.history.push('/')
            }
            if (this.props.type === 'edit') {
                this.props.handleUpdateRecipe(id, recipe)
                this.props.history.push(`/recipe/${id}`)
            }
        } else {
            this.setState({
                errorMessage: true
            })
        }
    }
    handleInputChange(e) {
        const target = e.target
        this.setState({
            [target.name]: target.value
        });
    }
    handleRemove(e) {
        e.preventDefault()
        if (window.confirm('Are you sure? Remove this Recipe')) {
            this.props.handleRemoveRecipe(this.props.id)
            this.props.history.push('/')
        }
    }

    render() {
        const { type } = this.props
        const formType = type === 'create' ? 'Create' : 'Save'
        const {
            title,
            ingredients,
            directions,
            errorMessage
        } = this.state
        return (
            <div className="Form">
                <form>
                    {errorMessage && <p className="error-message">Please fill form.</p>}
                    <div className="label">
                        <label htmlFor="title">Recipe Title</label>
                    </div>
                    <div className="input">
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="label">
                        <label htmlFor="ingredients">Ingredients</label>
                    </div>
                    <div className="textarea">
                        <textarea
                            name="ingredients"
                            id="ingredients"
                            cols="30"
                            rows="10"
                            value={ingredients}
                            onChange={this.handleInputChange}
                        ></textarea>
                    </div>
                    <div className="label">
                        <label htmlFor="directions">Directions</label>
                    </div>
                    <div className="textarea">
                        <textarea
                            name="directions"
                            id="directions"
                            cols="30"
                            rows="10"
                            value={directions}
                            onChange={this.handleInputChange}
                        ></textarea>
                    </div>
                    <div className="button-group">
                        <button
                            onClick={this.handleSubmit}>{formType}</button>
                        {formType === 'Save' && <button onClick={this.handleRemove}>Remove</button>}
                    </div>
                </form>
            </div>
        )
    }
}
