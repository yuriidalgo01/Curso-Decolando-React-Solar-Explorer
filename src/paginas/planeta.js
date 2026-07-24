import { Container, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShareIcon from "@mui/icons-material/Share";



export default function PaginaPlaneta() {

    function ClickCompartilhar(){
        window.navigator.share({
            url: '$(window.location.href)',
            text: "Explore o planeta <NOME> e descubra suas características.",
            title: "Conheça <NOME>"
        })

    }

    return (<>
        <Container maxWidth = "x1">

            <Link to = "/planetas">
                <Button variant="outlined" size = "large"><ArrowBackIosNewIcon />Voltar</Button>
            </Link>

            <Stack

                direction = "column"
                spacing = {2}
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}>
        

                <img className = "girar" src = "" alt = "" width = "100%" />
                <Typography variant = "h5" component = "h1" textAlign = "center">Planeta</Typography>
                <Typography variant = "body1" component = "p" textAlign = "center">Descrição do planeta</Typography>
                
                <Button variant="contained" size = "large" onClick={()=>{ClickCompartilhar();}}><ShareIcon />Compartilhar</Button>

            </Stack>
        </Container>
    </>);

}