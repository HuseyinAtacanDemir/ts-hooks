import CustomHookComponent from "./components/customHook.component";
import EvenMoreReact from "./components/evenMoreReact.component";
import UseContextComponent from "./components/useContext.component";
import UseEffectComponent from "./components/useEffect.component";
import UseReducerComponent from "./components/useReducer.component";
import UseRefComponent from "./components/useRef.component";
import UseStateComponent from "./components/useState.component";
import UseContextProvider from "./context/provider";

const App = () => {
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
      <h1>UseRef</h1>
      <UseRefComponent />
      <h1>Custom Hooks</h1>
      <CustomHookComponent />
      <h1>Even More React</h1>
      <EvenMoreReact />
    </div>
  );
};

export default App;
