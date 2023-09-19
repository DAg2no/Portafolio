import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ThemeButton from "../../theme/themeButton";
import Typography from '@mui/material/Typography'


const HeaderSection = ({ toggleTheme }) => {
  return (
    <>
    
      <Grid>
        <AppBar position="fixed" color="inherit">
          <Toolbar>
            <ThemeButton toggleTheme={toggleTheme} />
            <Typography variant="h2" color='inherit'></Typography>
          </Toolbar>
        </AppBar>
      </Grid>
      
    
    </>
  );
};
export default HeaderSection;
