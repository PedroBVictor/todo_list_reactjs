import { HeaderComp } from "./components/header";
import { TodoProvider } from "./context/AllContext";

function App() {
  return (
    <TodoProvider>
      <HeaderComp/>
    </TodoProvider>
  );
}

export default App;
