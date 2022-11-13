import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Succes() {
  
  return (
    <div>
        <h1  color="green">RESERVA EXITOSA</h1>
        <Link to="/home">
        <Button variant="outlined" color="success">
            Volver al Menu Principal
        </Button>
        </Link>
        <Link to="/ver">
        <Button variant="outlined" color="secondary"  >
            Ver Reservas
        </Button>
        </Link>
        
    </div>
  );
}

export default Succes;