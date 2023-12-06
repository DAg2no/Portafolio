import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material"
import { skillItems } from "./Maps/skillItems"

export const renderSkillItem = () => {
    return skillItems.map((item, index) =>(
        <Grid item xs={12} sm={6} md={4} key={index}>
      <Card sx={{ justifyContent: "center", alignItems: "center" }}>
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar
            variant="rounded"
            sx={{ width: 100, height: 100, margin: "auto", color: "#777A97" }}
          >
            <img src={item.iconSrc} style={{ width: 50, height: 50 }} />
            <Typography variant="h5">{item.title}</Typography>
          </Avatar>
          
        </CardContent>
      </Card>
    </Grid>
    ))
}