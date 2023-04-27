import { Provider } from "react-redux";
import "./App.css";
import Coin from "./features/coin/Coin";
import Counter from "./features/counter/Counter";
import { store } from "./app/store";

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <h2>REDUX & REACT by Nasimuddin Sk</h2>
        <Counter />
        <Coin />
      </div>
    </Provider>
  );
}

export default App;
