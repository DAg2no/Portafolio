import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";



const ThemeButton = ({ toggleTheme }) => {
  const theme = useTheme(); 

  return (
    <IconButton onClick={toggleTheme}>
      
      {theme.palette.mode === "dark" ? <NightsStayIcon /> : <WbTwilightIcon />}
    </IconButton>
  );
};

export default ThemeButton;
