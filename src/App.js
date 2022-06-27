import { TodosApp, TodosProvider } from "./todos";

import "./css/base.css";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <TodosProvider>
        <TodosApp />
      </TodosProvider>
    </div>
  );
}

export default App;
