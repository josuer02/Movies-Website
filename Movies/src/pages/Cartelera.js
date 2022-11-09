import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
const Cartelera = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://6367089979b0914b75da6bad.mockapi.io/api/v1/movies`)
      .then((getData) => {
        setApiData(getData.data);
        console.log(getData);
      });
  }, []);

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  return (
    <div className="flex-centered">
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
                <Img alt="img" src={data.avatar} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {data.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Horario : {data.date}
                  </Typography>
                </Grid>
                <Grid item>
                  <Link to="/reservas" >
                    <Typography sx={{ cursor: "pointer" }} variant="body2">
                      Reservar
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  Q{data.price}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
      <p>
        <Link to="/proximamente">
          <Button variant="contained" size="large">
            Proximos Estrenos{" "}
          </Button>
        </Link>
      </p>
    </div>
  );
};

export default Cartelera;
