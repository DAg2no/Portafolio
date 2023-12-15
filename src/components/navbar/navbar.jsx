import {
  AppBar,
  Hidden,
  IconButton,
  Stack,
  Toolbar,
  InputBase,
  Box,
  alpha,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeSwitch from "../../theme/themeButton";
import { renderNavButtons } from "../../helpers/renderNavButtons";
import { Search } from "@mui/icons-material";

export const NavBar = ({ toggleDrawer, toggleTheme }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box
          component="span"
          sx={{
            width: "100%",
            borderRadius: 200,
            backgroundColor: alpha("#fff", 0.15),
            overflow: "hidden",
          }}
        >
          <InputBase
            placeholder="Search..."
            fullWidth
            startAdornment={<Search />}
            inputProps={{ "aria-label": "search" }}
            sx={{ padding: "5px", color: "inherit" }}
          />
        </Box>

        <Hidden mdDown>
          <Stack direction="row" spacing={5} marginLeft="10px">
            {renderNavButtons()}
          </Stack>
        </Hidden>

        <Stack sx={{ marginLeft: 2 }}>
          <ThemeSwitch toggleTheme={toggleTheme} />
        </Stack>

        <Hidden mdUp>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ marginRight: "1rem" }}
            accessibilityLabel="Open menu"
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};
