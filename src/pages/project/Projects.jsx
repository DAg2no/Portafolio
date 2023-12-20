import styled from "@emotion/styled"
import { Box, Button, Container, Grid, Paper, Typography, } from "@mui/material"
import "./styles.css"
export const Projects = () => {
  const Img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center"    
  })
  return (
    <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
          mt={23}
        >
         
           
          <Grid item sm={12}>
              <Paper sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                overflow: "hidden",
                
              }}>
                <Img src="/Portafolio.png" style={{height: 200}}/>
             <Box sx={{display: "grid", flexGrow: 2}}>
              <Typography variant="h3" >Portafolio</Typography>
              <Typography variant="body1" >¡Este es mi primer portafolio!</Typography>
              <Button variant="contained">Ir al proyecto</Button>
             </Box>
             </Paper>
          </Grid>
        </Grid>

    </Container>
  )
}
