import { useState, useEffect } from "react";
const axios = require("axios");

function App() {
  const [activity, setActivity] = useState("");

  const fetchData = () => {
    axios
      .get("https://www.boredapi.com/api/activity")
      .then((response) => {
        // handle success
        console.log(response);
        // Fill in your code.
        setActivity(response.data.activity);
      })
      .catch((error) => {
        // handle error
        console.log(error);
        alert("error", error);
      });
  };
  useEffect(() => {
    console.log("Run after the first render");
    fetchData();
  }, []);
  return (
    <div>
      <div>activity: {activity}</div>
      <button onClick={fetchData}>Get Activity</button>
    </div>
  );
}
export default App;
