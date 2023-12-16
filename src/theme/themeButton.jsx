import IconButton from "@mui/material/IconButton";
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import { useTheme } from "@emotion/react";


const ThemeButton = ({ toggleTheme }) => {
  const theme = useTheme();
  const IconForMui = theme.palette.mode === 'light' ? <WbTwilightIcon/> : <NightsStayIcon/>;

  return (
    <IconButton onClick={toggleTheme} size="1rem">
      {IconForMui}
    </IconButton>
    
      
  );
};

export default ThemeButton;
