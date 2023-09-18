import HeaderSection from "../components/Header/HeaderSection";
import Grid from '@mui/material/Grid'

const Home = ({toggleTheme}) => {
  

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
      <HeaderSection toggleTheme={toggleTheme}/>
    </Grid>
  </>
  )
}

export default Home;
