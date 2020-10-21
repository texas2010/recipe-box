import React, { Component } from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import './style.css'

import Home from '../../Pages/Home'
import Recipe from '../../Pages/Recipe'
import Create from '../../Pages/Create'
import Edit from '../../Pages/Edit'

import Header from '../../components/Header'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recipes: []
        }
        this.handleCreateRecipe = this.handleCreateRecipe.bind(this)
        this.handleUpdateRecipe = this.handleUpdateRecipe.bind(this)
        this.handleRemoveRecipe = this.handleRemoveRecipe.bind(this)
    }
    componentDidMount() {
        const recipesJSON = localStorage.getItem('recipes')
        if (recipesJSON) {
            this.setState({
                recipes: JSON.parse(recipesJSON)
            })
        }
    }

    handleCreateRecipe(recipe) {
        this.setState(state => {
            const newArray = [...state.recipes, recipe]
            localStorage.setItem('recipes', JSON.stringify(newArray))
            return {
                recipes: newArray
            }
        })
    }
    handleUpdateRecipe(id, recipe) {
        this.setState(state => {
            const newArray = state.recipes.map(item => {
                if (item.id === id) {
                    return recipe
                } else {
                    return item
                }
            })
            localStorage.setItem('recipes', JSON.stringify(newArray))
            return {
                recipes: newArray
            }
        })
    }
    handleRemoveRecipe(id) {
        this.setState(state =>{
            const newArray = state.recipes.filter(item => item.id !== id)
            localStorage.setItem('recipes', JSON.stringify(newArray))
            return {
                recipes: newArray
            }
        })
    }

    render() {
        const { recipes } = this.state
        return (
            <div className="App">
                <BrowserRouter>
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
                </BrowserRouter>
            </div>
        )
    }
}
