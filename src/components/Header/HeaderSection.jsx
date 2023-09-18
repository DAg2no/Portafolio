import Grid from "@mui/material/Grid";
import { AppBar, Toolbar, Typography } from "@mui/material";

import ThemeSwitcher from "../../theme/themeButton";

const HeaderSection = ({toggleTheme}) => {
  return (
    <>
      <Grid>
        
          <ThemeSwitcher toggleTheme={toggleTheme}/>
      </Grid>
    </>
  );
};
export default HeaderSection;
