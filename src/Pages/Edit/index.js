import React, { Component } from 'react'
import Form from '../../components/Form'
import './style.css'

export default class Edit extends Component {
    render() {
        const {
            match,
            recipes
        } = this.props
        const recipe = recipes.find(item => item.id === match.params.id)
        if (recipe) {
            return (
                <div className="Edit">
                    <h2>Edit Recipe</h2>
                    <Form 
                        type="edit"
                        {...recipe}
                        {...this.props}
                        />
                </div>
            )
        } else {
            return (
                <div>Loading...</div>
            )
        }
    }
}