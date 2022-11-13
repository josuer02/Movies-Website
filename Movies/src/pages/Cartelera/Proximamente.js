import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import Loader from "../../components/Loader/Loader";

const Proximamente = () => {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(
        `https://6367089979b0914b75da6bad.mockapi.io/api/v1/proximamente`
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
    content = <Loader />;
  }
  return (
    <div className="flex-centered">
      <div className="h1">{content}</div>
      <h1 className="centered">Proximos Estrenos</h1>
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
                <Img alt="img" src={data.avatar} data-testid="imgProx" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    data-testid="nameProx"
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    data-testid="tipoProx"
                  >
                    {data.type}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    data-testid="dateProx"
                  >
                    Estreno : {data.date}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
};

export default Proximamente;
