import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  // AXIOS USING PROMISES
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
    });
  }, []);

  // AXIOS USING ASYNC AND AWAIT WITH ERROR HANDLING
  const getAPIData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAPIData();
  });

  return (
    <div className="App">
      <h1>Axios Tutorial</h1>
      {data.map((el) => {
        return (
          <div className="card" key={el.id}>
            <h2>{el.title}</h2>
            <p>{el.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
