/* eslint-disable react/no-unescaped-entities */

import {
  Typography,
  useTheme,
  Container,
  Box,
  Avatar,
  Hidden,
  Grid,
} from "@mui/material";
import ImgMini from "../../../public/imgMini.png";

import "./styles.css";
import { blue } from "@mui/material/colors";



export const Home = () => {
  const theme = useTheme();
  const themeColor = theme.palette.mode === "light" ? "#F311AB" : "#319FC4";

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="wrap"
        className="slide-top"
        marginTop={25}
        spacing={1}
      >
        <Grid item sx={12} md={6}>
          <Container maxWidth="xl">
            <Typography variant="h3" component="div">
              I'm <strong style={{ color: themeColor }}>Daniel Uribe</strong>
            </Typography>

            <br />

            <Typography variant="h5" component="p">
              Soy un{" "}
              <strong style={{ color: themeColor }}>desarrollador web</strong>{" "}
              con una pasión por el aprendizaje y la creación. Me considero una persona introvertida, pero siempre estoy dispuesto a ayudar a los demás, especialmente en el ámbito laboral. Soy consciente de que no soy perfecto y que puedo cometer errores, pero creo que eso es lo que nos hace humanos. De los errores se aprende y se crece.{" "}
            </Typography>
            <br />
            <Typography variant="h5" component="p">
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
          </Container>
        </Grid>
        <Hidden mdDown>
          <Grid md={6}>
            <Box justifyContent="center" display="flex">
              <Avatar
                src={ImgMini}
                alt="imgMini"
                sx={{ bgcolor: blue[50], width: 450, height: 450 }}
              />
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </>
  );
};
