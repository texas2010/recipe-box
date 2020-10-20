import React, { Component } from 'react'

import './style.css'

export default class index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title: this.props.title || '',
        }
    }
    
    render() {
        const {
            title,
            // ingredients,
            // directions
        } = this.state
        return (
            <div className="Form">
                <form>
                        <div>
                            <label htmlFor="title">Recipe Title</label>
                        </div>
                        <div>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                defaultValue={title}
                            />
                        </div>
                </form>
            </div>
        )
    }
}
