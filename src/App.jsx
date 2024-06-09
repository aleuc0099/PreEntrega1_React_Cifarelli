import "./components/NavBar";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer text="Wellcome! Let's have something great for dinner!" />
    </div>
  );
}

export default App;
