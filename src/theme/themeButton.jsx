import IconButton from "@mui/material/IconButton";
import AppleIcon from '@mui/icons-material/Apple';


const ThemeButton = ({ toggleTheme }) => {
  

  return (
    <IconButton onClick={toggleTheme} size="1rem">
      <AppleIcon sx={{color: '#ffff'}}/>
    </IconButton>
    
      
  );
};

export default ThemeButton;
