import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useState} from "react";
import makeToast from "./toast"
import Footer from "./Footer"




const theme = createTheme();

export default function SignIn(props) {
    const [user,setUser] = useState(
        {
          email:"",
          password:""
        }
    )
    function redirect (){
      window.location.href=("http://localhost:3000/")
    }

  const handleSubmit = (event) => {
    event.preventDefault();
   

    axios.post("https://myadviser.herokuapp.com/login",
    user).then((res)=>{ console.log(res);
      localStorage.setItem("CC_Token", res.data);
      if(res.data===localStorage.getItem("CC_Token"))
      {
        makeToast("success", "Welcome dear user");
        setTimeout(redirect,1000)
      }
      else{
        makeToast("success", res.data.msg);
      }
      
      
      console.log(res.data)
      
     }).catch((err)=>{
        console.log(err)})
      
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={user.email}
              onChange={handleChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={user.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="http://localhost:3000/signUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer/>
    </ThemeProvider>
  );
}