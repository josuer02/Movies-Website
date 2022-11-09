import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  const sendDataToAPI = () => {
    axios
      .post(`https://6367089979b0914b75da6bad.mockapi.io/api/v1/usuarios`, {
        name,
        password,
        email,
      })
      .then((response) => {
        console.log(response.data);
        navigate("/home");
        localStorage.setItem("user-info", JSON.stringify(response));
      });
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Ingrese su correo"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            id="outlined-disabled"
            label="Ingrese su nombre"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            id="outlined-password-input"
            label="Ingrese su contraseña"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button variant="contained" size="large" onClick={sendDataToAPI}>
          Submit
        </Button>
      </Box>
    </div>
  );
};
