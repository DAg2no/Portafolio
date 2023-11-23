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
    <Grid item xs={12} md={6} sm={6}>
      <Card>
        <CardActionArea href={link}> 
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Avatar src={iconSrc} variant="rounded" sx={{ width: 150, height: 150 }} />
            <Typography variant="h3">{title}</Typography>
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
        alignContent="center"
        textAlign="center"
        wrap="wrap"
        mt={15}
      >
        <Grid item sx={12}>
          <Box
            flexDirection="column"
            alignItems="center"
            display="flex"
            sx={{ width: 200, height: 200 }}
          >
            <Avatar src="/foto.png" sx={{ width: 150, height: 150 }} />
            <Typography variant="h4" className={colorTextTheme}>
              <strong>Daniel Uribe</strong>
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        textAlign="center"
        wrap="wrap"
      >
        <ContactItem iconSrc="/github.png" title="Github" link='https://github.com/DAg2no'/>
        <ContactItem iconSrc="/gmail.png" title="Gmail" />
        <ContactItem iconSrc="/stackoverflow.png" title="StackOverflow" />
        <ContactItem iconSrc="/whatsapp.png" title="Whatsapp" />
      </Grid>
    </>
  );
};
