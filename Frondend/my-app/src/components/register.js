import * as React from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState} from "react";
import  axios from "axios"


const theme = createTheme();

export default function Register() {
    const [user,setUser] = useState(
        {
          name:"",
          surname:"",
          category:"",
          email:"",
          password:""
        }
    )
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/register", user).then((res)=>{
        console.log(res)
    }).catch((err)=>
    { console.log(err)})

  };
  function handleChange(e){
    const {name, value} = e.target;
    setUser({
        ...user,
        [name]:value,
    })
    
  }
  return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Typography component="h1" variant="h5">
              ADVISER REGISTER
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                    autoComplete="name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="name"
                    value={user.name}
                    autoFocus
                    onChange={handleChange}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="surname"
                    label="surname"
                    name="surname"
                    value={user.surname}
                    autoComplete="surname"
                    onChange={handleChange}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="category"
                    label="category"
                    name="category"
                    value={user.category}
                    autoComplete="category"
                    onChange={handleChange}
                  />
                </Grid>
              
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="email"
                    name="email"
                    value={user.email}
                    autoComplete="email"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="password"
                    type="password"
                    id="password"
                    value={user.password}
                    autoComplete="new-note"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Record
            </Button>
            <Grid container justifyContent="flex-end">
              
            </Grid>
          </Box>
        </Box>
    
      </Container>
    </ThemeProvider>
  );
}