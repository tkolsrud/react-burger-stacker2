import './App.css';
import BurgerPane from './components/burgerPane'
import Stack from './components/stack'
// import Ingredient from './components/ingredient'
// import ClearStack from './components/clearStack'

function App() {
  return (
    <div className="App">
      <h1>Burger Stacker App</h1>
      <BurgerPane />
      <Stack />
    </div>
  );
}

export default App;
