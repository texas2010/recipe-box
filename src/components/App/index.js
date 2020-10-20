import React, { Component } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import './style.css'

import Home from '../../Pages/Home'
import Create from '../../Pages/Create'
import Edit from '../../Pages/Edit'

import Header from '../../components/Header'

export default class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            recipes: []
        }
    }
    
    render() {
        const { recipes } = this.state
        return (
            <div className="App">
                <Header />
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact>
                            <Home recipes={recipes} />
                        </Route>
                        <Route path="/create">
                            <Create />
                        </Route>
                        <Route path="/edit/:id">
                            <Edit />
                        </Route>
                        <Route>
                            <Redirect to="/" />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
