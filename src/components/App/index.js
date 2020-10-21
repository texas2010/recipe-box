import React, { Component } from 'react'
import {
    HashRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import './style.css'
import { recipesState } from './recipesState'

import Home from '../../Pages/Home'
import Recipe from '../../Pages/Recipe'
import Create from '../../Pages/Create'
import Edit from '../../Pages/Edit'

import Header from '../../components/Header'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recipes: recipesState
        }
        this.handleCreateRecipe = this.handleCreateRecipe.bind(this)
        this.handleUpdateRecipe = this.handleUpdateRecipe.bind(this)
        this.handleRemoveRecipe = this.handleRemoveRecipe.bind(this)
    }
    componentDidMount() {
        const recipesJSON = localStorage.getItem('recipes')
        if (recipesJSON) {
            this.setState({ recipes: JSON.parse(recipesJSON) })
        } else {
            localStorage.setItem('recipes', JSON.stringify(this.state.recipes))
        }
    }

    handleCreateRecipe(recipe) {
        this.setState(state => ({
            recipes: [...state.recipes, recipe]
        }), () => localStorage.setItem('recipes', JSON.stringify(this.state.recipes)))
    }
    handleUpdateRecipe(id, recipe) {
        this.setState(state => ({
            recipes: state.recipes.map(item => item.id === id ? recipe : item)
        }), () => localStorage.setItem('recipes', JSON.stringify(this.state.recipes)))
    }
    handleRemoveRecipe(id) {
        this.setState(state => ({
            recipes: state.recipes.filter(item => item.id !== id)
        }), () => localStorage.setItem('recipes', JSON.stringify(this.state.recipes)))
    }

    render() {
        const { recipes } = this.state

        return (
            <div className="App">
                <HashRouter>
                    <Header />
                    <Switch>
                        <Route
                            path="/"
                            exact
                            render={routeProps => (
                                <Home
                                    {...routeProps}
                                    recipes={recipes}
                                />)}
                        />
                        <Route
                            path="/recipe/:id"
                            render={routeProps => (
                                <Recipe
                                    {...routeProps}
                                    recipes={recipes}
                                    handleRemoveRecipe={this.handleRemoveRecipe}
                                />)}
                        />
                        <Route
                            path="/create"
                            render={routeProps => (
                                <Create
                                    {...routeProps}
                                    handleCreateRecipe={this.handleCreateRecipe}
                                />)}
                        />
                        <Route
                            path="/edit/:id"
                            render={routeProps => (
                                <Edit
                                    {...routeProps}
                                    recipes={recipes}
                                    handleUpdateRecipe={this.handleUpdateRecipe}
                                    handleRemoveRecipe={this.handleRemoveRecipe}
                                />
                            )}
                        />
                        <Route>
                            <Redirect to="/" />
                        </Route>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
