import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import "./styles.css";
import { renderProjectCardRecent } from "../../helpers/renderProjectCardRecent";
import { useTheme } from "@emotion/react";
import { renderWork } from "../../helpers/renderWork";

export const Home = () => {
  // ** render project cards
  const theme = useTheme();
  const themeColor = theme.palette.mode === "light" ? "#668CB4" : "#3899FF";

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
              <Typography
                variant="h4"
                component="span"
                sx={{ color: themeColor }}
              >
                DAg2no
              </Typography>
            </Box>

            <Typography variant="h4" component="div">
              project recent
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: 1 }}>
              {renderProjectCardRecent()}
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h4" component="div" className="roboto">
                My jobs
              </Typography>
            </Box>
            <Grid
              container
              spacing={1}
              direction="row"
              mt={5}
              justifyContent="center"
              alignItems="center"
              alignContent="center"
              wrap="wrap"
            >
              {renderWork()}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
