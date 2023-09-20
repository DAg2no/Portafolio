import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";

import AppleIcon from '@mui/icons-material/Apple';


const ThemeButton = ({ toggleTheme }) => {
  const theme = useTheme(); 

  return (
    <IconButton onClick={toggleTheme}>
      
      {theme.palette.mode === "dark" ? <AppleIcon /> : <AppleIcon />}
    </IconButton>
  );
};

export default ThemeButton;
