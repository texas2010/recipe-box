import React, { Component } from 'react'

export default class index extends Component {
    render() {
        const {
            match
        } = this.props
        return (
            <div>
                <h1>Edit Recipe</h1>
                <p>id: {match.params.id}</p>
            </div>
        )
    }
}
