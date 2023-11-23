import { Card, CardActionArea, CardContent, Chip, Grid, Typography } from "@mui/material"
import { ProjectCard } from "./Maps/projectCards"

export const renderProjectCard = () => {
    return ProjectCard.map((prop, index) => (
<Grid item sx={12} md={2} sm={2} key={index}>
          <Card sx={{maxWidth: 200, maxHeight: 200}}>
            <CardActionArea href={prop.link}>
                <CardContent>
                  <Typography variant="h5" component='span'>{prop.name}</Typography>
                  <p>
                    {prop.description}
                  </p>
                  <Chip label={prop.chips} variant="outlined"/>
                </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
    ))
  }