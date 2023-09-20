import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import ThemeSwitch from "../../theme/themeButton";

const HeaderSection = ({ toggleTheme }) => {
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
        <Grid>
          <AppBar position="fixed" color="inherit">
            <Toolbar >
              <ThemeSwitch toggleTheme={toggleTheme} />
              
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        style={{ marginTop: '5rem' }}
      >
        <Typography variant="h1" color="inherit">
          hi
        </Typography>
      </Grid>
    </>
  );
};
export default HeaderSection;
