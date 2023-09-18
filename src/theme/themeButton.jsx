import { Button } from '@mui/material';

const ThemeSwitcher = ({ toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>
      Cambiar tema
    </Button>
  );
}

export default ThemeSwitcher;