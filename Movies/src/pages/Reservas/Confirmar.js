import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Confirmar() {
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

  const handleClick = () => {
    onDelete(id);
  };

  const onDelete = (id) => {
    axios
      .delete(
        `https://6367089979b0914b75da6bad.mockapi.io/api/v1/reservas/${id}`
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <h1>Confirma para cancelar la reserva</h1>
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
            data-testid="emailD"
            label="Email"
            id="outlined-disabled"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
          />

          <div>
            <TextField
              disabled
              label="Nombre de la Pelicula"
              id="outlined-disabled"
              data-testid="nameD"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <TextField
              disabled
              label="ID"
              data-testid="IDD"
              id="outlined-disabled"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div>
            <TextField
              disabled
              label="Fecha"
              data-testid="dateD"
              id="outlined-disabled"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <TextField
              disabled
              label="Precio"
              data-testid="priceD"
              id="outlined-disabled"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <TextField
              disabled
              label="Descripcion"
              data-testid="descripcionD"
              id="outlined-disabled"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            >
              {" "}
            </TextField>
          </div>
          <div>
            <Link to="/success">
              <Button
                variant="contained"
                onClick={handleClick}
                size="large"
                data-testid="btnSubmitD"
              >
                Submit
              </Button>
            </Link>
          </div>
        </div>
      </Box>
    </div>
  );
}
