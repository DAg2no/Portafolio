/* eslint-disable react/no-unescaped-entities */

import { Grid, Typography, useTheme, Container, Box, Avatar, Hidden } from "@mui/material";
import ImgMini from '../../../public/imgMini.png'
import './styles.css'
import { blue } from "@mui/material/colors";

export const About = () => {
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
        <Grid sx={12} md={6}>
        <Container maxWidth="xl">
          <Typography variant="h3" component="div">
            I'm <strong style={{ color: themeColor }}>Daniel Uribe</strong>
          </Typography>

          <br />

          <Typography variant="h5" component="p">
            Soy un{" "}
            <strong style={{ color: themeColor }}>desarrollador web</strong>{" "}
            pero a la vez sigo ampliando mis conocimientos, aveces puedo ser
            alguien solitario. Pero trato de ser alguien de apoyo especiamente
            en areas de trabajo, pero no me asimilo persona perfecta y siempre
            puedo cometer errores. Pero creo que eso es lo que nos hace
            especiales, devemos aprender de los errores para que en un futuro le
            demos la solucion.{" "}
          </Typography>
          <br />
          <Typography variant="h5" component="p">
            {" "}
            Me gusta ser una persona creativa, cuando ago algo me gusta que sea
            perfecto. Aunque paresca que sea una desventaja la verdad creo que
            esto es lo que me caracteriza como persona. Trato de que las cosas
            que hago o el metodo de como lo hago sea lo mas profesional posible.
            Trato de expandir mis conocimientos en las nuevas tecnologias que se
            han ido presentando, en estar lo mas actualizado posible de estas.
            Yo puedo usar <strong style={{ color: themeColor }}>
              css
            </strong>, <strong style={{ color: themeColor }}>html</strong> y{" "}
            <strong style={{ color: themeColor }}>javascript</strong> sin
            problemas, pero de dominarlo dificil siempre se puede aprender algo
            nuevo cada dia.
          </Typography>
        </Container>
        </Grid>
      <Hidden mdDown>

        <Grid md={6}>
          <Box justifyContent="center" display="flex">
              <Avatar src={ImgMini} alt="imgMini" sx={{bgcolor: blue[50], width: 450, height: 450}}/>
          </Box>
        </Grid>
      </Hidden>
      </Grid>
    </>
  );
};
