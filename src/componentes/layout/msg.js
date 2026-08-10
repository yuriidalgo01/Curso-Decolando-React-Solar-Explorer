import { Cached, Home } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material"
import { Stack } from "@mui/system"

export default function ComponenteLayoutMsg(props){
    return(
    <>
        <Grid container height = "100vh"> 
            <Grid item xs = {11} sm = {8} md = {6} xl = {4} margin = "auto">
                <Stack direction = "column" alignItems = "center" spacing = {2}>

                    {props?.icone}  {/*recebimento de icone*/}
                    <Typography variant ="h4" component = "h1" textAlign = "center">{props?.titulo}</Typography>
                    <Typography variant ="subtitle1" component = "p" textAlign = "center">{props?.subtitulo}</Typography>
                    <Typography variant ="body1" component = "p" textAlign = "center">{props?.descricao}</Typography>

                    {props.children}

                    {(props?.btnTentarNovamente === true) && (
                        <Button variante = "outlined" startIcon = {<Cached/>} onClick={()=>{window.location.reload(); }}>
                            Tente novamente !!
                        </Button>
                    )}

                    {(props?.btnInicio === true) && (
                        <Button variante = "outlined" startIcon = {<Home/>} onClick={()=>{window.location.href = "/"; }}>
                            Home
                        </Button>
                    )}

                </Stack>
            </Grid>
        </Grid>
    </>)
    
}