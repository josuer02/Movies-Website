import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
const Promociones = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://6367089979b0914b75da6bad.mockapi.io/api/v1/promos`)
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
      <h1 className="centered">Promociones</h1>
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
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img alt="img" src={data.avatar} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h4" component="div">
                    {data.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {data.description}
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

export default Promociones;
