import { FormComp } from "./components/form";
import { HeaderComp } from "./components/header";
import { TodoProvider } from "./context/AllContext";

function App() {
  return (
    <TodoProvider>
      <HeaderComp/>
      <FormComp />
    </TodoProvider>
  );
}

export default App;
