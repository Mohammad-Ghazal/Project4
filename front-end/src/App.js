import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Item from "./Item";
import NewItem from "./NewItem";
export default function App() {
  const [articales, setArticales] = useState([]);
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  };

  const getAllArticles = () => {
    axios
      .get(`http://localhost:5000/articles`)
      .then((responce) => {
        console.log("data: " + responce.data);
        setArticales(responce.data);
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  return (
    <div className="app">
      <h3>App</h3>
      <button onClick={getAllArticles}>Get articales</button>
      <button onClick={setCount}>set count</button>

      <NewItem />
      <Item />
    </div>
  );
  // render(){
  // return (
  //   <div  className="app">
  //     <h1>HELLO WORLD</h1>
  //   </div>
  // );
  // }
}

/* 
// functional component
const App = () => {
  return (
    <div>
      <h1>HELLO WORLD</h1>
    </div>
  );
};
export default App;
*/
/*export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }*/
