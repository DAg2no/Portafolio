import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3Alt, faHtml5, faReact, faSass, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { blue, indigo, lime, purple } from "@mui/material/colors";
import { projectCardRecent } from "../../helpers/projectCardsRecent";
import { useTheme } from "@emotion/react";

export const Home = () => {

  // ** render project cards
  const theme = useTheme()
  const themeColor = theme.palette.mode === 'light' ? "#668CB4" : "#3899FF";

  const renderProjectCardRecent = () => {
    return projectCardRecent.map((elements, index) => (
      <Grid item xs={12} sm={6} key={index}>
      <Card sx={{ maxHeight: 180, }}  className="slide-fwd-center">
          <CardActionArea href={elements.link}>
        <CardContent>
          <Typography variant="h6">{elements.name}</Typography>
          <p>
            {elements.description}
          </p>
          <Chip label={elements.chips} variant="uotlined" />
        </CardContent>
          </CardActionArea>
      </Card>
    </Grid>
    ))
  }

  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: 12 }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          textAlign="center"
          spacing={3}
        >

          <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                alt="hola!"
                src="/icon.png"
                sx={{ width: 150, height: 150 }}
              />
              <Typography variant="h4" component="span" sx={{color: themeColor}}>
               
                  
                DAg2no
            
              </Typography>
            </Box>

                  <Typography variant="h4" component='div' >project recent</Typography>
            <Grid container spacing={2} sx={{ marginTop: 1 }}>
              
              {renderProjectCardRecent()}
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
          <Typography variant="h4" component='div'>Stack</Typography>
            <Box mt={3}>
              <Grid
                container
                spacing={2}
                display="flex"
                justifyContent="center"
                direction="row"
              >
                
               


            </Grid>
           </Box>
            
              
            
             
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

