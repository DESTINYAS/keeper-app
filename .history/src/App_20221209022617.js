import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import Data from "./Datas";

function App() {
  return (
    <div className="App">
      <Header />
      <Note props={Data} />
      <Footer />
    </div>
  );
}

export default App;
