import NumericButton from "./components/NumericButton";
import OperationButton from "./components/OperationButton";
import Visor from "./components/Visor";

import './App.css'

function App() {
  return (
    <div className="container">
      <div className="calculadora">
        <p className="title">REACT CALC</p>
        <div>
          <Visor />
        </div>
        <div>
          <NumericButton value="7" />
          <NumericButton value="8" />
          <NumericButton value="9" />
          <OperationButton value="x" />
        </div>
        <div>
          <NumericButton value="4" />
          <NumericButton value="5" />
          <NumericButton value="6" />
          <OperationButton value="-" />
        </div>
        <div>
          <NumericButton value="1" />
          <NumericButton value="2" />
          <NumericButton value="3" />
          <OperationButton value="+" />
        </div>
        <div>
          <NumericButton value="0" />
          <NumericButton value="," />
          <OperationButton value="CE" />
          <OperationButton value="=" />
        </div>
      </div>
    </div>
  );
}

export default App;
