import { useEffect, useState } from "react";

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
      <h1>Login/SignIn</h1>
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        type="text"
        placeholder="username"
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Passowrd"
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
    </div>
  );
}
export default Form;