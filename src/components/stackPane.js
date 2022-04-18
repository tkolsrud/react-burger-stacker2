import React from 'react'
import ClearStack from './clearStack'
import Ingredient from './indgredient'

const StackPane =(props) =>{    
    
    let allIngredients = props.ingredients.map((ing, i) => {
       return <Ingredient 
                ingredient={ing}
                key={i} 
            />
    })
    
    return (
        <>
        <h2>Stack Pane</h2>
        {allIngredients}
        <ClearStack clear={props.clearIngredients}/>
        </>
    )
    
}

export default StackPane