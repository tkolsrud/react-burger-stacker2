import React, { useState } from 'react'
import IngredientPane from './ingredientPane'
import StackPane from './stackPane'


const BurgerStacker = () => {

    const ingredients = [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Lettuce Wrap', color: 'olivedrab'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}
      ]

    const [ingList, setIngList] = useState([])     

    const addIngredient = (e) => {
        console.log(e.target)
        let ingColor = e.target.style.backgroundColor
        let ingName = e.target.innerText
        setIngList(()=>[{name: ingName, color: ingColor}, ...ingList])
    }

    const clearIngredients = (e) => {
        setIngList(() => [])
    }


    return (
        <>
        <h1>Burger Stacker App</h1>
        <IngredientPane ingredients={ingredients} addIngredient={addIngredient}/>
        <StackPane ingredients={ingList} clearIngredients={clearIngredients}/>
        </>
    )
}

export default BurgerStacker