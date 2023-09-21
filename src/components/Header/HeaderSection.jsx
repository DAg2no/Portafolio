import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Box, Hidden } from "@mui/material";
import Container from "@mui/material/Container";
import { TypeAnimation } from "react-type-animation";
import ThemeSwitch from "../../theme/themeButton";
import { useState } from "react";

const HeaderSection = ({ toggleTheme }) => {
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
        <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
          <Toolbar>
            <ThemeSwitch toggleTheme={toggleTheme} />

            <Hidden mdUp>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
                sx={{ marginLeft: "1rem" }}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>

            <Hidden mdDown>
              <Button variant="text" color="inherit">
                <Typography variant="h6" color="inherit" fontSize="1.1rem">
                  {" "}
                  Portafolio{" "}
                </Typography>
              </Button>
              <Button variant="text" color="inherit">
                <span>Projects</span>
              </Button>
              <Button variant="text" color="inherit">
                <span>description</span>
              </Button>
              <Button variant="text" color="inherit">
                <span>Contacts</span>
              </Button>
            </Hidden>
          </Toolbar>
        </AppBar>
      </Grid>

      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          direction="row"
          style={{ marginTop: "15rem" }}
          display="flex"
          flexDirection="column"
        >
          <Hidden lgDown>
            <Box>
              <img
                src="https://raw.githubusercontent.com/DAg2no/Portafolio/master/public/pc.png"
                alt="PC"
                style={{ width: 250, height: 250 }}
              />
            </Box>
          </Hidden>

          <TypeAnimation
            sequence={[
              "<h1> hi world! </h1>",
              1000,
              "<h1> My name is Daniel Uribe! </h1>",
              1000,
              "<h1> Welcome to the page where anything is within reach! </h1>",
              1000,
              "<h1> Here you will find good projects to come up with good Tips! </h1>",
              1000,
            ]}
            speed={50}
            style={{
              fontSize: "3rem",
              fontFamily: "monospace",
            }}
            repeat={Infinity}
          />
        </Grid>
      </Container>

      {/* Drawer for small screens */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button>
            <ListItemText primary="Portafolio" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Description" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contacts" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default HeaderSection;
