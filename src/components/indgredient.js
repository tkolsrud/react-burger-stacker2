import React from 'react'

const Ingredient = (props) => {

    return (
        <p 
            onClick={props.handleClick} 
            style={{backgroundColor: props.ingredient.color}}
        >
            {props.ingredient.name}
        </p>
    )
    
}

export default Ingredient