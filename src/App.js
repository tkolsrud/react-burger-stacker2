import './App.css';
import BurgerPane from './components/burgerPane'
import Stack from './components/stack'
// import Ingredient from './components/ingredient'
// import ClearStack from './components/clearStack'

function App() {
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

  return (
    <div className="App">
      <h1>Burger Stacker App</h1>
      <BurgerPane ingredients={ingredients}/>
      <Stack />
    </div>
  );
}

export default App;
