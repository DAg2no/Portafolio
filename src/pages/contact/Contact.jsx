import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";

import "./styles.css";

const ContactItem = ({ iconSrc, title, link }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardActionArea href={link} sx={{ textDecoration: "none" }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 3,
            }}
          >
            <Avatar
              src={iconSrc}
              alt={title}
              variant="rounded"
              sx={{ width: 100, height: 100, marginBottom: 2 }}
            />
            <Typography variant="h5">{title}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export const Contact = () => {
  const theme = useTheme();
  const colorTextTheme =
    theme.palette.mode === "light" ? "LightModeTextColor" : "DarkModeTextColor";

  return (
    <>
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
            <Typography variant="h4" className={colorTextTheme}>
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
        <ContactItem iconSrc="/github.png" title="Github" link='https://github.com/DAg2no'/>
        <ContactItem iconSrc="/gmail.png" title="Gmail" />
        <ContactItem iconSrc="/stackoverflow.png" title="StackOverflow" />
        <ContactItem iconSrc="/whatsapp.png" title="Whatsapp" />
      </Grid>
    </>
  );
};
