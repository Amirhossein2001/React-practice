import "./App.css";

function App() {
  const age = 24;

  return (
    <div className="App">
      {age > 20 ? <h1>Over</h1> : <h1>Under</h1>}
      {age == 27 && <h1>Age is 20</h1>}

      <button type="submit" className= {age > 20 ? "success" : "warning"}>Click Me</button>
    </div>
  );
}

export default App;
