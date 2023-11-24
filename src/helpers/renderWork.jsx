import { Card, CardActionArea, CardContent, Grid, Typography, CardMedia } from "@mui/material"
import { Works } from "./Maps/works"

export const renderWork = () => {
    return Works.map((work, index) => (
        <Grid item sx={12} md={6} key={index}>
            <Card>
                <CardActionArea href={work.link}>
                <CardContent>
                        <Typography variant="h4" component='span'> {work.name} </Typography>
                </CardContent>
                <CardMedia title={work.nameIMG} image={work.srcIMG} component='img' />
                </CardActionArea>
            </Card>
        </Grid>
    ))
}