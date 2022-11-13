import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

function Ver() {
  const [apiData, setApi] = useState({});
  const [telefono, setTel] = useState();
  const [idButton, setIdButton] = useState(1);

  const setData = (id, name, date, price, description, email) => {
    sessionStorage.setItem("ID", id);
    sessionStorage.setItem("name", name);
    sessionStorage.setItem("date", date);
    sessionStorage.setItem("price", price);
    sessionStorage.setItem("description", description);
    localStorage.setItem("email", email);
  };
  useEffect(() => {
    axios
      .get(
        `https://6367089979b0914b75da6bad.mockapi.io/api/v1/reservas/${telefono}`
      )

      .then((getData) => {
        console.log(getData);
        setApi(getData.data);
      });
  }, [idButton, telefono]);

  const handleClick = () => {
    setIdButton(telefono);
  };

  const handleClick2 = () => {
    setData(
      apiData.id,
      apiData.name,
      apiData.date,
      apiData.price,
      apiData.description,
      apiData.clientEmail
    );
  };

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      <h1>Reservas</h1>
      <TextField
        fullWidth
        label="ID reserva"
        id="fullWidth"
        value={telefono}
        onChange={(e) => setTel(e.target.value)}
      />
      <div>
        <Button
          variant="contained"
          size="large"
          onClick={handleClick}
          data-testid="btnVer"
        >
          Ver Reserva
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center" data-testid="emailV">
                Email{" "}
              </TableCell>
              <TableCell align="center" data-testid="nameV">
                Name
              </TableCell>
              <TableCell align="center" data-testid="priceV">
                Price
              </TableCell>
              <TableCell align="center" data-testid="dateV">
                Fecha
              </TableCell>
              <TableCell align="center" data-testid="descripcionV">
                Descripcion
              </TableCell>
              <TableCell align="center" data-testid="cancelarV">
                Cancelar
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" data-testid="emailApi">
                {apiData.clientEmail}
              </TableCell>
              <TableCell align="center" data-testid="nameApi">
                {apiData.name}
              </TableCell>
              <TableCell align="center" data-testid="priceApi">
                {apiData.price}
              </TableCell>
              <TableCell align="center" data-testid="dateApi">
                {apiData.date}
              </TableCell>
              <TableCell align="center" data-testid="descriptionApi">
                {apiData.description}
              </TableCell>

              <TableCell align="center">
                <Link to="/confirmar">
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleClick2}
                    data-testid="btnDelete"
                  >
                    Eliminar
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
export default Ver;
