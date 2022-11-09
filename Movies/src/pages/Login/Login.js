import React, { Component } from 'react';
import axios from 'axios';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from 'react-router-dom';


const baseUrl="https://6367089979b0914b75da6bad.mockapi.io/api/v1/usuarios";
class Login extends Component {
  state={
      form:{
          email: '',
          password: ''
      }
  }

  handleChange=async e=>{
      await this.setState({
          form:{
              ...this.state.form,
              [e.target.name]: e.target.value
          }
      });
  }

  iniciarSesion=async()=>{
      await axios.get(baseUrl, {params: {email: this.state.form.email, password: this.state.form.password}})
      .then(response=>{
          console.log(response.data)
          return response.data;
          
          
      })
      .then(response=>{
          if(response.length>0){
              
          localStorage.setItem('user-info', JSON.stringify(response));
          }else{
              alert('El usuario o la contraseña no son correctos');
          }
      })
      .catch(error=>{
          console.log(error);
      })

  }
  componentDidMount() {
    if(localStorage.getItem('user-info')){
        window.location.href="./home";
    }
}
  
  

  render() {
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
              onChange={this.handleChange}
            />
            
            <TextField
              required
              id="outlined-password-input"
              label="Ingrese su contraseña"
              type="password"
              autoComplete="current-password"
              onChange={this.handleChange}
            />
          </div>
          <Link to="/cartelera">
          <Button variant="contained" size="large" onClick={()=> this.iniciarSesion()}>
            Submit
          </Button>
          </Link>
        </Box>
      </div>
      );
  }
}

export default Login;