import { Avatar, Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import "./styles.css";
import { renderProjectCardRecent } from "../../helpers/renderProjectCardRecent";
import { useTheme } from "@emotion/react";
import { renderWork } from "../../helpers/renderWork";


export const Home = () => {
  // ** render project cards
  const theme = useTheme();
  const themeColor =
    theme.palette.mode === "light"
      ? "colorThemeTextLight"
      : "colorThemeTextDark";

  return (
    <>
    
      <Container maxWidth='md' sx={{ marginTop: 12 }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          textAlign="center"
          spacing={3}
        >
          <Grid item xs={12} sx={{ textAlign: "center" }}>
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
              <Typography variant="h4" component="span" className={themeColor}>
                <strong>DAg2no</strong>
              </Typography>
            </Box>

            <Typography variant="h4" component="div">
              project recent
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: 1 }}>
              {renderProjectCardRecent()}
            </Grid>
          </Grid>

          <Grid item xs={12}  >
            <Box sx={{pt: 10}}>
              <Card sx={{borderRadius: 5,}}>
                 <CardContent>
              <Typography variant="h4" component="div">
                Works Experience  🚀
              </Typography>
                  </CardContent> 
              </Card>
            <Grid
              container
              spacing={1}
              pt={2}
              direction="row"
              justifyContent="center"
              alignContent="center"
              >
              {renderWork()}
            </Grid>
              </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
