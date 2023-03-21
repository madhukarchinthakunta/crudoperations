import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUsers } from "../redux/action";

const AddUser = (props) => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    maidenName: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
  });
  let history = useNavigate();
  const [error, setError] = useState("");
  let dispatch = useDispatch();
  const { firstName, lastName, maidenName, age, gender, email, phone } = state;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !maidenName ||
      !age ||
      !gender ||
      !email ||
      !phone
    ) {
      setError("Please Enter All Inputs Field");
    } else {
      dispatch(addUsers(state));
      history("/");
      setError("");
    }
  };

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "20px" }}
        onClick={() => history("/")}
      >
        Go Back
      </Button>
      <div>
        <h2>AddUser</h2>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
      </div>

      <Grid
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch" },
        }}
      >
        <form noValidate autoComplete="off" onSubmit={handleSumbit}>
          <Grid>
            <TextField
              id="outlined-basic"
              label="FirstName"
              variant="outlined"
              value={firstName}
              type="text"
              size="large"
              onChange={handleChange}
              name="firstName"
            />
          </Grid>
          <Grid>
            <TextField
              id="filled-basic"
              label="LastName"
              variant="outlined"
              value={lastName}
              type="text"
              onChange={handleChange}
              name="lastName"
            />
          </Grid>
          <Grid>
            <TextField
              id="standard-basic"
              label="MaidenName"
              variant="outlined"
              value={maidenName}
              type="text"
              onChange={handleChange}
              name="maidenName"
            />
          </Grid>
          <Grid>
            <TextField
              id="outlined-basic"
              label="Age"
              variant="outlined"
              value={age}
              type="number"
              onChange={handleChange}
              name="age"
            />
          </Grid>
          <Grid>
            <TextField
              id="outlined-basic"
              label="Gender"
              variant="outlined"
              value={gender}
              type="text"
              onChange={handleChange}
              name="gender"
            />
          </Grid>
          <Grid>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              type="email"
              onChange={handleChange}
              name="email"
            />
          </Grid>
          <Grid>
            <TextField
              id="outlined-basic"
              label="Contact"
              variant="outlined"
              value={phone}
              type="number"
              onChange={handleChange}
              name="phone"
            />
          </Grid>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Grid>
    </>
  );
};

export default AddUser;
