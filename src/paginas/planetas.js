import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function PaginaPlanetas() {
    return (<>

<Container maxWidth = "x1">

        <Typography variant = "h2" component = "h1" textAlign = "center">
            Planetas do Sistema Solar!
        </Typography>

        <Grid
          container
          spacing = {2} marginTop = {2}
        >
           {/* XS = 2 item */}
           {/* SM = 3 item */}
           {/* MD = 4 item*/}
           {/* LG = 5 item*/}
           {/* XL = 6 item */} 

          <Grid item xs = {6} sm = {4} md = {3} lg = {2} xl = {2}>
            <Card>
                <Link to = "/planeta/teste">
                    <CardContent>
                        <img src = "" alt = "" width = "100%" />
                        <Typography variant = "h5" component = "h2" textAlign = "center">
                        Terra 1
                        </Typography>
                    </CardContent>
                </Link>
            </Card>
          </Grid>
        </Grid>
</Container>

    </>)
}