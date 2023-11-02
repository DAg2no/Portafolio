
import { useState } from "react";

import {
  Container,
  Grid,
  Typography,
  Avatar,
  Box,
  Card,
  CardContent,

} from "@mui/material";

import './styles.css'

import CustomDrawer from "../../components/CustomDrawer";
import NavBar from "../../components/Navbar";


const Home = ({ toggleTheme }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
        >
          <NavBar toggleDrawer={toggleDrawer} toggleTheme={toggleTheme} />
        </Grid>

        <Container maxWidth="lg">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            textAlign="center"
            style={{ marginTop: "3rem" }}
          >
            <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt="hola!"
                  src="/icon.png"
                  sx={{ width: 150, height: 150 }}
                />
                <Typography variant="h4" component="span">
                  DAg2no
                </Typography>
              </Box>
              <Grid container spacing={2} sx={{ marginTop: 2 }}>
                <Grid item xs={12} sm={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">Example</Typography>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum, nesciunt.
                      </p>
                      {/*  next tags example */}
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">Example</Typography>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum, nesciunt.
                      </p>
                      {/*  next tags example */}
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">Example</Typography>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum, nesciunt.
                      </p>
                      {/*  next tags example */}
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">Example</Typography>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum, nesciunt.
                      </p>
                      {/*  next tags example */}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>

              <Box>
                <Typography variant="h4" >Frontend</Typography>
                <Grid container spacing={2} display='flex' justifyContent='center' direction='row'>
                  <Grid item sx={6} sm={2} md={2}><Avatar src="/icon.png" variant='square' className="scale-up-center" sx={{width: 50, height: 50,}} /></Grid>
                  <Grid item sx={6} sm={2} md={2}><Avatar src="/icon.png" variant='square' className="scale-up-center" sx={{width: 50, height: 50,}} /></Grid>
                  <Grid item sx={6} sm={2} md={2}><Avatar src="/icon.png" variant='square' className="scale-up-center" sx={{width: 50, height: 50,}} /></Grid>
                  <Grid item sx={6} sm={2} md={2}><Avatar src="/icon.png" variant='square' className="scale-up-center" sx={{width: 50, height: 50,}} /></Grid>
                </Grid>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h4" >Framework and cloud</Typography>
                <Grid container spacing={2} display='flex' justifyContent='center' direction='row'>
                  <Grid item sx={6} sm={2} md={2}><Avatar src="/icon.png" variant='square' className="scale-up-center" sx={{width: 50, height: 50,}} /></Grid>
                  <Grid item sx={6} sm={2} md={2}><Avatar src="/icon.png" variant='square' className="scale-up-center" sx={{width: 50, height: 50,}} /></Grid>
                  <Grid item sx={6} sm={2} md={2}><Avatar src="/icon.png" variant='square' className="scale-up-center" sx={{width: 50, height: 50,}} /></Grid>
                  <Grid item sx={6} sm={2} md={2}><Avatar src="/icon.png" variant='square' className="scale-up-center" sx={{width: 50, height: 50,}} /></Grid>
               
                </Grid>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h4" >Backend</Typography>
                <Grid container spacing={2} display='flex' justifyContent='center' direction='row'>
                  <Grid item sx={6} sm={2} md={2}><Avatar src="/icon.png" variant='square' className="scale-up-center" sx={{width: 50, height: 50,}} /></Grid>
                  <Grid item sx={6} sm={2} md={2}><Avatar src="/icon.png" variant='square' className="scale-up-center" sx={{width: 50, height: 50,}} /></Grid>
                  <Grid item sx={6} sm={2} md={2}><Avatar src="/icon.png" variant='square' className="scale-up-center" sx={{width: 50, height: 50,}} /></Grid>
                  <Grid item sx={6} sm={2} md={2}><Avatar src="/icon.png" variant='square' className="scale-up-center" sx={{width: 50, height: 50,}} /></Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <CustomDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      </Grid>
    </>
  );
};

export default Home;
