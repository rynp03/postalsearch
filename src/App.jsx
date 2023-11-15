import AppBar from "./Components/AppBar";
import MainBody from "./Components/MainBody";

const App = () => {
  return (
    <>
      <AppBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MainBody />
      </div>
    </>
  );
};

export default App;
