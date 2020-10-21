import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './style.css'

export default class Home extends Component {
    render() {
        const {
            recipes
        } = this.props
        return (
            <div className="Home">
                <Link to="create" className="create-button">Create New Recipe</Link>
                <ul>
                    {recipes.map(item => (
                        <li key={item.id}>
                            <h2>
                                <Link to={`/recipe/${item.id}`}>{item.title}</Link>
                            </h2>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
