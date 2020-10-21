import React, { Component } from 'react'
import './style.css'
import Form from '../../components/Form'

export default class Create extends Component {
    render() {
        return (
            <div className="Create">
                <h2>Create New Recipe</h2>
                <Form type="create" {...this.props} />
            </div>
        )
    }
}
