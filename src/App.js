import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Info } from "./components/Info/Info";
import { Menu } from "./components/Menu/Menu";


function App() {
  return <div className={styles.app}>
    <Menu />
    <div className={styles.main}>
      <Header />
      <Info />
    </div>
  </div>;
}

export default App;
