import './App.css';
// import Baitap1 from "./baitap1";
// import Baitap2 from "./baitap2";
import RenderingElements from './rendering-elements';
import HandlingEvents from './handling-events';
import State from './state';
import ChangeColorCar from './changeColorCar';
import ListKeys from './list-keys';

function App() {
  return (
    <div>
      {/* <Baitap1/> */}
      {/* <Baitap2/> */}
      <RenderingElements/>
      <hr/>
      <HandlingEvents/>
      <hr/>
      <State/>
      <hr/>
      <ChangeColorCar/>
      <hr/>
      <ListKeys/>
    </div>
  );
}

export default App;
