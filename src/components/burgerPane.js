import React, { Component }from 'react'
import Ingredient from './indgredient'

class BurgerPane extends Component {
    render() {
        return (
            <>
            <h2>BurgerPane</h2>
            <Ingredient />
            <Ingredient />
            <Ingredient />
            </>
        )
    }
}

export default BurgerPane