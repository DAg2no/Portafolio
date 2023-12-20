import { Card, CardMedia, Grid } from "@mui/material"
import { skill } from "./Maps/skill"

export const renderSkill = () => {
  return skill.map((Skills, index) => (
    <Grid item xs={6} sm={4} md={2} key={index}>
    <Card sx={{ height: "100%", width: "100%" }}>
      <CardMedia
        image={Skills.linkSrc}
        component="img"
        sx={{ width: "100%" }}
      />
    </Card>
  </Grid>
  ))
}
