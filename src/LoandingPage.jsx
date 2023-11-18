import Grid from '@mui/material/Grid'
import Loanding from '../public/Loanding.gif'

export const LoandingPage = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      wrap="wrap"
      
    >
<img src={Loanding} alt="loanding" style={{width: 150, height: 150, borderRadius: 90, marginTop: 200}} />
    </Grid>
  )
}
