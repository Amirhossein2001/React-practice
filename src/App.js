import "./App.css";

function App() {
  const age = 2;

  return (
    <div className="App">
      {age > 20 ? <h1>Over</h1> : <h1>Under</h1>}
      {age == 27 && <h1>Age is 20</h1>}
    </div>
  );
}

export default App;
