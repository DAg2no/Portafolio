import {
  Avatar,
  Box,
  Grid,
  Typography, Container,
} from "@mui/material";

import "./styles.css";

export const Skill = () => {
  return (
    <>
    <Container maxWidth="xl">
      
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        mt={15}
      >
        <Grid item xs={12}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            pb={3}
          >
            <Avatar
              src="/foto.png"
              alt="Daniel Uribe"
              sx={{ width: 150, height: 150, mb: 2 }}
            />
            <Typography variant="h4" className="DarkModeTextColor">
              <strong>Daniel Uribe</strong>
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        pt={3}
      >
      </Grid>
    </Container>
    </>
  );
};
