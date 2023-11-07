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
import { faBootstrap, faCss3Alt, faHtml5, faReact, faSass, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { blue, indigo, lime, purple } from "@mui/material/colors";

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
          spacing={3}
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
            <Typography variant="h4" component='div'> My skill! </Typography>
            <Box mt={3}>
              <Typography variant="h5">Stack</Typography>
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
                    sx={{ width: 55, height: 55, bgcolor: blue[50], border: '3px solid black', borderRadius: 2, }}

                  >
                    <FontAwesomeIcon
                      icon={faHtml5}
                      style={{ color: "#bd5528", width: 50, height: 50, }}
                    />
                  </Avatar>
                </Grid>
                <Grid item sx={6} sm={2} md={2}>
                  <Avatar
                    className="scale-up-center"
                    sx={{ width: 55, height: 55, borderRadius: 2, bgcolor: indigo[50], border: '3px solid black', }}
                  >
                    <FontAwesomeIcon icon={faCss3Alt} style={{color: "#0346ba", width: 50, height: 50,}} />
                  </Avatar>
                </Grid>
                <Grid item sx={6} sm={2} md={2}>
                  <Avatar          
                    className="scale-up-center"
                    sx={{ width: 55, height: 55, borderRadius: 2, bgcolor: lime[50], border: '3px solid black', }}
                  >
                    <FontAwesomeIcon icon={faSquareJs} style={{color: "#ebcb00", width: 50, height: 50,}} />
                  </Avatar>
                </Grid>
                <Grid item sx={6} sm={2} md={2}>
                  <Avatar
                    className="scale-up-center"
                    sx={{ width: 55, height: 55, borderRadius: 2, bgcolor: purple[50], border: '3px solid black', }}
                  >
                    <FontAwesomeIcon icon={faSass} style={{color: "#9e428d", width: 45, height: 50,}} />
                  </Avatar>
                </Grid>
                <Grid item sx={6} sm={2} md={2}>
                  <Avatar
                    className="scale-up-center"
                    sx={{ width: 55, height: 55, bgcolor: blue[50], border: '3px solid black', borderRadius: 2, }}
                    >
                        <FontAwesomeIcon icon={faReact} style={{color: "#0555e1", width: 45, height: 45,}} />
                  </Avatar>
                </Grid>
                <Grid item sx={6} sm={2} md={2}>
                  <Avatar
                    className="scale-up-center"
                    sx={{ width: 55, height: 55, bgcolor: purple[50], border: '3px solid black', borderRadius: 2,  }}
                    >
                    <FontAwesomeIcon icon={faBootstrap} style={{color: "#562763", width: 45, height: 45,}} />
                  </Avatar>
                </Grid>
                <Grid item sx={6} sm={2} md={2}>
                  <Avatar
                    className="scale-up-center"
                    sx={{ width: 50, height: 50, color: '#2748DB', bgcolor: blue[50], borderRadius: 2, border: '3px solid black',}}
                    src="/muiIcon.svg"
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
