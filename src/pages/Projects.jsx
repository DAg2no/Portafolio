import { Container, Grid, Typography } from "@mui/material"

export const Projects = () => {
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
          <Grid item>
            <Typography variant="p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, exercitationem? Magnam laboriosam quam rerum, eveniet amet nostrum qui unde doloremque officiis, iste illum?</Typography>
          </Grid>
        </Grid>

    </Container>
  )
}
