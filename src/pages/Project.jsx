import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { renderProjectCard } from "../helpers/renderProjectCard";
export const Project = () => {
 
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
