import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Link to="/"><h1>The Recipe Box</h1></Link>
            </div>
        )
    }
}
