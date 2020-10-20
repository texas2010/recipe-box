import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './style.css'

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Link to="create" className="link">Create New Recipe</Link>
            </div>
        )
    }
}
