import { Drawer } from "./components";
import "./App.css";
import { Content } from "./components/Content";

function App() {
  return (
    <div className="container">
      <Drawer />
      <Content />
    </div>
  );
}

export default App;
