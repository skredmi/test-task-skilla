import "./App.css";
import { Header } from "./components/Header/Header";
import { Menu } from "./components/Menu/Menu";

function App() {
  return <div className="app">
    <Menu />
    <div className="main">
      <Header />
    </div>
  </div>;
}

export default App;
