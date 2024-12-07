import { useEffect, useState } from "react";
import "./style/Form.css"

function Form() {
  const [details, setDetails] = useState({ username: "", password: "" });
  const [records, setRecords] = useState([]);

  useEffect(() => {
    if (records.length !== 0) {
      localStorage.setItem("records", JSON.stringify(records));
    }
  }, [records]);

  const handleChange = (event) => {
    setDetails((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRecords((prevState) => [...prevState, details]);
  };

  console.log(">>", records);
  return (
    <div className="container">
      <div className="container1">
      <h1>Login/SignIn</h1>
      <hr />
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        type="text"
        placeholder="username"
        onChange={handleChange}
      />
      <br />
      <input
        name="password"
        type="password"
        placeholder="Passowrd"
        onChange={handleChange}
      />
      <br />
      <button className="submit">Submit</button>
    </form>
    </div>
    </div>
  );
}
export default Form;