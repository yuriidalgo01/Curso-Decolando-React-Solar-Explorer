
import { Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function PaginaInicio() {
    return (<>

        
        <Stack

        
        direction="column"
        spacing={2}
        sx={{
            display: "flex",
            alignItems : "center",
            textAlign: "center,",
            justifyContent: "center",
            minHeight: "100vh", // Corrigido de 'hight' para 'minHeight'
        }}
        >
        
        

            <Typography variant = "h3" component = "h1" textAlign = "center">Conheça os planetas do Sistema Solar!</Typography>

            <img className = "animacaoEfeitoFlutuante"
            src = "/img/astronauta.png"
            alt = "Astronalta Flutuando no Espaço"
            />

            <Link to = "/planetas">
                <Button variant="contained" size = "large">Vamos explorar!<ArrowForwardIosIcon /></Button>
            </Link>



        </Stack>


          
    </>)
};