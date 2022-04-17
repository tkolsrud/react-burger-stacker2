import React, { Component }from 'react'
import Ingredient from './indgredient'

class BurgerPane extends Component {


    render() {

        let Ingredients = this.props.ingredients.map((ing,i)=> {
            return <Ingredient name={ing.name} key={i} />
        })


        this.state = ['test']
        return (
            <>
            <h2>BurgerPane</h2>
            {Ingredients}
            </>
        )
    }
}

export default BurgerPane