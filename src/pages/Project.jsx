import { Card, CardActionArea, CardContent, Chip, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { ProjectCard } from "../helpers/projectCards"

export const Project = () => {
  const renderProjectCard = () => {
    return ProjectCard.map((prop, index) => (
<Grid item sx={12} md={2} sm={2} key={index}>
          <Card sx={{maxWidth: 200, maxHeight: 200}}>
            <CardActionArea href={prop.link}>
                <CardContent>
                  <Typography variant="h5" component='span'>{prop.name}</Typography>
                  <p>
                    {prop.description}
                  </p>
                  <Chip label={prop.chips} variant="outlined"/>
                </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
    ))
  }
  return (
    <>
      <Grid
        container
        sx={{marginTop: 20}}
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
        textAlign='center'
      >
        <Grid item sx={12}>
        <Typography variant="h4" marginBottom={2} >Project</Typography>
        <Grid container spacing={2} justifyContent='center'>
       {renderProjectCard()}
          
        </Grid>  
        </Grid>
      </Grid>
    </>
  );
};
