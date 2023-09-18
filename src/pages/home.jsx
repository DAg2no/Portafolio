import HeaderSection from "../components/Header/HeaderSection";
import Grid from '@mui/material/Grid'

const Home = () => {
  const [theme, setTheme] = useState(true);
  return ( 
    <>
    <Grid
      container
      spacing={1}
      direction="row"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      wrap="wrap"
    >
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <HeaderSection />
    </ThemeProvider>
    </Grid>
        
    </>
  )
}
const darkTheme = {
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#525252",
    },
  },
};

const lightTheme = {
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#000000",
    },
  },
};

export default Home;
