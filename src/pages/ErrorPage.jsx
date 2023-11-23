
import {
  Avatar,
  Box,
   Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import NotFound from '../../public/not-found.gif'


export const ErrorPage = () => {
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      textAlign='center'
      display='flex'
      marginTop={20}
      wrap="wrap"
      
    >

<Box >

      <Avatar src={NotFound} sx={{width: 200, height: 200}}/>
      <Link
        to="/"
        title="Ir a la página principal"
        style={{textDecoration: 'none', color: 'inherit', backgroundColor: 'gray',}}
      >
        <strong>
        Ir a la página principal
        </strong>
      </Link>
</Box>
    </Grid>
  );
};

