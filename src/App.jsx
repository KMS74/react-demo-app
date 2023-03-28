import Products from "./components/Products";
import TheFooter from "./components/TheFooter";
import TheNavbar from "./components/TheNavbar";
import TheSlider from "./components/TheSlider";

function App() {
  return (
    <div className="App">
      <TheNavbar />
      <TheSlider />
      <Products />
      <TheFooter />
    </div>
  );
}

export default App;
