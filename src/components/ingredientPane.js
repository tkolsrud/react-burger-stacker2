import React from 'react'
import Ingredient from './indgredient'

const IngredientPane = (props) => {

    let allIngredients = props.ingredients.map((ing,i)=> {
        return <Ingredient 
                    ingredient={ing} 
                    handleClick={props.addIngredient} 
                    key={i} 
                />
    })
    
    return (
        <>
        <h2>BurgerPane</h2>
        {allIngredients}
        </>
    )
}

export default IngredientPane