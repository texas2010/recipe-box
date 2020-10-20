import React, { Component } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Home from '../../Pages/Home'
import Create from '../../Pages/Create'
import Edit from '../../Pages/Edit'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/create" component={Create} />
                    <Route path="/edit/:id" component={Edit} />
                    <Route>
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
