import {
  Typography,
  useTheme,
  Container,
  Box,
  Avatar,
  Hidden,
  Grid,
  Stack,
  IconButton,
} from "@mui/material";

import "./styles.css";
import { blue } from "@mui/material/colors";
import { Email, GitHub, WhatsApp } from "@mui/icons-material";

export const Home = () => {
  const theme = useTheme();
  const themeColor = theme.palette.mode === "light" ? "#F311AB" : "#319FC4";
  return (
    <>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          textAlign="center"
          mt={30}
          pb={30}
        >
          <Grid item xs={12}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "orbitron",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem", lg: "4rem" },
              }}
            >
              Daniel Ignacio Uribe Pulgar
            </Typography>
            <Typography
              variant="h4"
              className="DarkModeTextColor"
              sx={{
                fontFamily: "PT Sans",
                fontSize: { xs: "1rem", md: "1.5rem", lg: "2rem" },
              }}
            >
              Frontend Developer
            </Typography>
            <Stack flexDirection="row" justifyContent="center" mt={6}>
              <IconButton href="https://github.com/DAg2no">
                <GitHub />
              </IconButton>
              <IconButton href="mailto:danielscrip.zsh@gmail.com">
                <Email />
              </IconButton>
              <IconButton href="/https://stackoverflow.com/users/21894223/daniel-uribe">
                <Avatar
                  src="/stackoverflow.png"
                  variant="rounded"
                  sx={{ width: 30, height: 30 }}
                />
              </IconButton>
              <IconButton href="https://wa.me/+56936577203">
                <WhatsApp />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
          pt={20}
          pb={20}
          spacing={1}
        >
          <Grid item sx={12} md={6}>
            <Typography variant="body1" component="p" sx={{ fontSize: 20 }}>
              Soy un{" "}
              <strong style={{ color: themeColor }}>desarrollador web</strong>{" "}
              con una pasión por el aprendizaje y la creación. Me considero una
              persona introvertida, pero siempre estoy dispuesto a ayudar a los
              demás, especialmente en el ámbito laboral. Soy consciente de que
              no soy perfecto y que puedo cometer errores, pero creo que eso es
              lo que nos hace humanos. De los errores se aprende y se crece.{" "}
            </Typography>
            <br />
            <Typography variant="body1" component="p" sx={{ fontSize: 20 }}>
              {" "}
              Me gusta ser una persona creativa, cuando ago algo me gusta que
              sea perfecto. Aunque paresca que sea una desventaja la verdad creo
              que esto es lo que me caracteriza como persona. Trato de que las
              cosas que hago o el metodo de como lo hago sea lo mas profesional
              posible. Trato de expandir mis conocimientos en las nuevas
              tecnologias que se han ido presentando, en estar lo mas
              actualizado posible de estas. Yo puedo usar{" "}
              <strong style={{ color: themeColor }}>css</strong>,{" "}
              <strong style={{ color: themeColor }}>html</strong> y{" "}
              <strong style={{ color: themeColor }}>javascript</strong> sin
              problemas, pero de dominarlo dificil siempre se puede aprender
              algo nuevo cada dia ❤️.
            </Typography>
          </Grid>
          <Hidden mdDown>
            <Grid md={6}>
              <Box justifyContent="center" display="flex">
                <Avatar
                  src="/foto.png"
                  alt="imgMini"
                  variant="rounded"
                  className="AvatarContainer"
                  sx={{ width: 450, height: 450, borderRadius: 10 }}
                />
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </>
  );
};
