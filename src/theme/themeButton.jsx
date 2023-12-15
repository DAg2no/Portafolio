import IconButton from "@mui/material/IconButton";
import NightsStayIcon from '@mui/icons-material/NightsStay';


const ThemeButton = ({ toggleTheme }) => {
  

  return (
    <IconButton onClick={toggleTheme} size="1rem">
      <NightsStayIcon/>
    </IconButton>
    
      
  );
};

export default ThemeButton;
