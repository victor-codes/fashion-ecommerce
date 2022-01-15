import "./App.css";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  const media = window.matchMedia("(min-width: 1200px)").matches;

  return (
    <>
      {media ? (
        <div className="App">
          <Header />
          <Main />
        </div>
      ) : (
        <SmallScreen />
      )}
    </>
  );
}

export default App;

const SmallScreen = () => {
  return (
    <h3 style={{ textAlign: "center", font: "1rem normal" }}>
      Come back with a bigger screen mate!
    </h3>
  );
};
