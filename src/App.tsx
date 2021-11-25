import UseEffectComponent from "./components/useEffect.component";
import UseStateComponent from "./components/useState.component";

function App() {
  return (
    <div className="app-container">
      <h1>UseState</h1>
      <UseStateComponent />
      <h1>UseEffect</h1>
      <UseEffectComponent />
    </div>
  );
}

export default App;
