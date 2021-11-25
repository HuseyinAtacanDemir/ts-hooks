import UseContextComponent from "./components/useContext.component";
import UseEffectComponent from "./components/useEffect.component";
import UseReducerComponent from "./components/useReducer.component";
import UseStateComponent from "./components/useState.component";
import UseContextProvider from "./context/provider";

function App() {
  return (
    <div className="app-container">
      <h1>UseState</h1>
      <UseStateComponent />
      <h1>UseEffect</h1>
      <UseEffectComponent />
      <h1>UseContext</h1>
      <UseContextProvider>
        <UseContextComponent />
      </UseContextProvider>
      <h1>UseReducer</h1>
      <UseReducerComponent />
    </div>
  );
}

export default App;
