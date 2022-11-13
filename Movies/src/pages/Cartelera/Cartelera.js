import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Loader from '../../components/Loader/Loader'
function Cartelera() {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function handleClick() {
    navigate("/proximamente");
  }
  const setData = (id, name, date, price, description, email) => {
    sessionStorage.setItem('ID', id)
    sessionStorage.setItem('name', name)
    sessionStorage.setItem('date', date)
    sessionStorage.setItem('price', price)
    sessionStorage.setItem('description', description)
  }

  async function fetchData() {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(
        `https://6367089979b0914b75da6bad.mockapi.io/api/v1/movies`
      );
      if (data.ok) {
        throw new Error("Something went wrong!");
      }
      setApiData(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  let content;

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <Loader/>;
  }

  return (
    <div className="flex-centered">
      <div className="h1">{content}</div>
      <h1 className="centered">Cartelera</h1>
      {apiData.map((data) => (
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={0}>
            <Grid item>
              <ButtonBase sx={{ width: 240, height: 300 }}>
                <Img alt="img" src={data.avatar} data-testid="imagenPelis" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    data-testid="nombrePelis"
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    data-testid="descriptionPelis"
                  >
                    {data.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    data-testid="fechaPelis"
                  >
                    Horario : {data.date}
                  </Typography>
                </Grid>
                <Grid item>
                  <Link to="/reservas" onClick={() => setData(data.id, data.name, data.date, data.price, data.description)} >
                    <Typography sx={{ cursor: "pointer" }} variant="body2">
                      Reservar
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
              <Grid item>
                <Typography
                  variant="subtitle1"
                  component="div"
                  data-testid="precioPelis"
                >
                  Q{data.price}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
      <p>
        <Button variant="contained" size="large" data-testid="proximosEstrenos" onClick={handleClick}>
          Proximos Estrenos{" "}
        </Button>
      </p>
    </div>
  );
}
export default Cartelera;
