
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function PaginaInicio() {
    return (<>

        
        <Stack

        direction = "column"
        spacing = {2}
        sx={{
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        
        

            <Typography variant = "h2" component = "h1">Conheça os planetas do Sistema Solar!</Typography>

            <img className = "efeito-flutuante"
            src = "/img/astronauta.png"
            alt = "Astronalta Flutuando no Espaço"
            />

            <Link to = "/planetas">
                <Button variant="contained" size = "large">Vamos explorar!<ArrowForwardIosIcon /></Button>
            </Link>



        </Stack>


          
    </>)
};