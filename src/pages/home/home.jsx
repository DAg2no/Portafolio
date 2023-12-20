import {
  Typography,
  useTheme,
  Container,
  Box,
  Avatar,
  Grid,
  Stack,
  IconButton,
} from "@mui/material";
import {
  ArrowCircleDown,
  Email,
  GitHub,
  WhatsApp,
} from "@mui/icons-material";
import { renderSkill } from "../../helpers/renderSkill";

export const Home = () => {
  const theme = useTheme();
  const themeColor = theme.palette.mode === "light" ? "#F311AB" : "#319FC4";

  return (
    <Container maxWidth="xl">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        wrap="wrap-reverse"
        mt={15}
        pb={15}
        spacing={3}
      >
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "orbitron",
              fontSize: { xs: "2rem", sm: "2rem", md: "3rem", lg: "2.5rem" },
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
              pb: 2,
            }}
          >
            Frontend Developer
          </Typography>
          <Typography variant="body1" component="p" sx={{ fontSize: 20 }}>
            Soy un{" "}
            <strong style={{ color: themeColor }}>desarrollador web</strong>{" "}
            apasionado y perfeccionista con habilidades en{" "}
            <strong style={{ color: themeColor }}>CSS</strong>,{" "}
            <strong style={{ color: themeColor }}>HTML</strong> y{" "}
            <strong style={{ color: themeColor }}>JavaScript</strong>. Comprometido
            con el aprendizaje constante y la excelencia profesional. Enfocado en
            superar expectativas con pasión en cada proyecto. ❤️{" "}
          </Typography>
          <Stack flexDirection="row" pt={3}>
            <IconButton>
              <GitHub />
            </IconButton>
            <IconButton>
              <WhatsApp />
            </IconButton>
            <IconButton>
              <Email />
            </IconButton>
            <IconButton>
              <Avatar
                src="/stackoverflow.png"
                variant="rounded"
                sx={{ width: 30, height: 30 }}
              />
            </IconButton>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6} className="puff-in-center">
          <Box justifyContent="center" display="flex" >
            <Avatar
              className="AvatarContainer"
              src="/foto.png"
              alt="imgMini"
              variant="rounded"
              sx={{
                width: "100%", // Use percentage for responsiveness
                maxWidth: 450,
                height: "auto",
                borderRadius: 10,
              }}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
      >
        <ArrowCircleDown sx={{width: 100, height: 100}}/>
        <Grid item xs={12} md={12} textAlign="center" mt={10}>
          <Typography variant="h3" component="h3" sx={{ fontFamily: "orbitron" }}>
            Habilidades
          </Typography>
          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
            pt={15}
            wrap="wrap"
          >
            {renderSkill()}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
