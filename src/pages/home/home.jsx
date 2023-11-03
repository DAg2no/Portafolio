import { useState } from "react";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import "./styles.css";

import CustomDrawer from "../../components/CustomDrawer";
import NavBar from "../../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { blue, red } from "@mui/material/colors";

const Home = ({ toggleTheme }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
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

      <Container maxWidth="lg" sx={{ marginTop: 12 }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          textAlign="center"
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
                className="rotate-scale-down"
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
              <Typography variant="h4">Frontend</Typography>
              <Grid
                container
                spacing={2}
                display="flex"
                justifyContent="center"
                direction="row"
              >
                <Grid item sx={6} sm={2} md={2}>
                  <Avatar
                    className="scale-up-center"
                    sx={{ width: 55, height: 55, bgcolor: blue[50], border: '3px solid black', borderRadius: 2 }}

                  >
                    <FontAwesomeIcon
                      icon={faHtml5}
                      style={{ color: "#bd5528", width: 50, height: 50 }}
                    />
                  </Avatar>
                </Grid>
                <Grid item sx={6} sm={2} md={2}>
                  <Avatar
                    src="/icon.png"
                    variant="square"
                    className="scale-up-center"
                    sx={{ width: 50, height: 50 }}
                  />
                </Grid>
                <Grid item sx={6} sm={2} md={2}>
                  <Avatar
                    src="/icon.png"
                    variant="square"
                    className="scale-up-center"
                    sx={{ width: 50, height: 50 }}
                  />
                </Grid>
                <Grid item sx={6} sm={2} md={2}>
                  <Avatar
                    src="/icon.png"
                    variant="square"
                    className="scale-up-center"
                    sx={{ width: 50, height: 50 }}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h4">Framework and cloud</Typography>
              <Grid
                container
                spacing={2}
                display="flex"
                justifyContent="center"
                direction="row"
              >
                <Grid item sx={6} sm={2} md={2}>
                  <Avatar
                    src="/icon.png"
                    variant="square"
                    className="scale-up-center"
                    sx={{ width: 50, height: 50 }}
                  />
                </Grid>
                <Grid item sx={6} sm={2} md={2}>
                  <Avatar
                    src="/icon.png"
                    variant="square"
                    className="scale-up-center"
                    sx={{ width: 50, height: 50 }}
                  />
                </Grid>
                <Grid item sx={6} sm={2} md={2}>
                  <Avatar
                    src="/icon.png"
                    variant="square"
                    className="scale-up-center"
                    sx={{ width: 50, height: 50 }}
                  />
                </Grid>
                <Grid item sx={6} sm={2} md={2}>
                  <Avatar
                    src="/icon.png"
                    variant="square"
                    className="scale-up-center"
                    sx={{ width: 50, height: 50 }}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h4">Backend</Typography>
              <Grid
                container
                spacing={2}
                display="flex"
                justifyContent="center"
                direction="row"
              >
                <Grid item sx={6} sm={2} md={2}>
                  <Avatar
                    src="/icon.png"
                    variant="square"
                    className="scale-up-center"
                    sx={{ width: 50, height: 50 }}
                  />
                </Grid>
                <Grid item sx={6} sm={2} md={2}>
                  <Avatar
                    src="/icon.png"
                    variant="square"
                    className="scale-up-center"
                    sx={{ width: 50, height: 50 }}
                  />
                </Grid>
                <Grid item sx={6} sm={2} md={2}>
                  <Avatar
                    src="/icon.png"
                    variant="square"
                    className="scale-up-center"
                    sx={{ width: 50, height: 50 }}
                  />
                </Grid>
                <Grid item sx={6} sm={2} md={2}>
                  <Avatar
                    src="/icon.png"
                    variant="square"
                    className="scale-up-center"
                    sx={{ width: 50, height: 50 }}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <CustomDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Home;
