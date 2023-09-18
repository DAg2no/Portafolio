import Grid from "@mui/material/Grid";
import { AppBar, Toolbar, Typography } from "@mui/material";
const HeaderSection = () => {
  const [theme, setTheme] = useState(true);
  return (
    <>
      <Grid>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Switch
              checked={theme}
              data-mui-theme={theme ? "dark" : "light"}
              onChange={(event) => setTheme(!theme)}
            />
          </Toolbar>
        </AppBar>
      </Grid>
    </>
  );
};
export default HeaderSection;

// <Switch
//       checked={theme}
//       data-mui-theme={theme ? "dark" : "light"}
//       onChange={(event) => setTheme(!theme)}
//     />
