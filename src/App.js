import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Amir";
  return (
    <div className="App">
      <div className="">
        <h1>{name}</h1>
        <GetUser name="Amir" age={23} email="Amir@gmail.com" />
      </div>
    </div>
  );
}

const GetUser = (props) => {
  return (
    <div className="">
      <div className="">{props.name}</div>
      <div className="">{props.age}</div>
      <div className="">{props.email}</div>
    </div>
  );
};

export default App;
