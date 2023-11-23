import { Card, CardActionArea, CardContent, Chip, Grid, Typography } from "@mui/material"
import { projectCardRecent } from "./Maps/projectCardsRecent"

export const renderProjectCardRecent = () => {
    return projectCardRecent.map((elements, index) => (
      <Grid item xs={12} sm={6} key={index}>
      <Card sx={{ maxHeight: 180, }} >
          <CardActionArea href={elements.link}>
        <CardContent>
          <Typography variant="h6">{elements.name}</Typography>
          <p>
            {elements.description}
          </p>
          <Chip label={elements.chips} variant="uotlined" />
        </CardContent>
          </CardActionArea>
      </Card>
    </Grid>
    ))
  }