import Grid from "@mui/material/Grid";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import ThemeButton from "../../theme/themeButton";



const HeaderSection = ({toggleTheme}) => {
  return (
    <>
      <Grid>
        <AppBar position="fixed" color="inherit">
          <Toolbar>
            
              <ThemeButton toggleTheme={toggleTheme}/>
            
          </Toolbar>
        </AppBar>
          
      </Grid>
    </>
  );
};
export default HeaderSection;
