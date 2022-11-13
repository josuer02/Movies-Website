import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Reservas() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const [clientEmail, setClientEmail] = useState("");

  useEffect(() => {
    setId(sessionStorage.getItem("ID"));
    setName(sessionStorage.getItem("name"));
    setPrice(sessionStorage.getItem("price"));
    setDate(sessionStorage.getItem("date"));
    setDescription(sessionStorage.getItem("description"));
    setClientEmail(localStorage.getItem("email"));
  }, []);

  const sendDataToAPI = () => {
    axios
      .post(`https://6367089979b0914b75da6bad.mockapi.io/api/v1/reservas`, {
        id,
        name,
        price,
        date,
        description,
        clientEmail,
      })
      .then((response) => {
        //console.log(response.data);
      });
  };

  const handleClick = () => {
    sendDataToAPI();
    sessionStorage.removeItem("ID");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("price");
    sessionStorage.removeItem("date");
    sessionStorage.removeItem("description");
  };

  return (
    <div>
      <h1>Confirmación</h1>
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
            disabled
            data-testid='emailF'
            label="Email"
            id="outlined-disabled"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
          />

          <div>
            <TextField
              disabled
              data-testid='name'
              label="Nombre de la Pelicula"
              id="outlined-disabled"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <TextField
              disabled
              label="ID"
              data-testid='ID'
              id="outlined-disabled"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div>
            <TextField
              disabled
              label="Fecha"
              data-testid='date'
              id="outlined-disabled"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <TextField
              disabled
              label="Precio"
              data-testid='price'
              id="outlined-disabled"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <TextField
              disabled
              label="Descripcion"
              data-testid='Descripcion'
              id="outlined-disabled"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            >
              {" "}
            </TextField>
          </div>
          <div>
            <Link to="/success">
              
              <Button data-testid='btnSubmit' variant="contained" onClick={handleClick} size="large" >
                Submit
              </Button>
            </Link>
            
            <Link to="/ver">
              
              <Button data-testid='btnVer' variant="contained"  size="large">Ver Reservas</Button>
            </Link>
            
          </div>
        </div>
      </Box>
    </div>
  );
}
