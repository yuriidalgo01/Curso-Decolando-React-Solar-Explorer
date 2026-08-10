import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ComponenteLayoutPadrao from "../componentes/layout/padrao";
import ApiPlanetas from "../api/planetas/apiPlanetas";


export default function PaginaPlanetas() {

    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState(null);
    const [msg, setMsg] = useState(null);


    // Função qque executa quando é aberta a página
    useEffect(() => {
        (async () => {

            let resposta = await ApiPlanetas.obterTodos();

            console.log("Resposta da API: ");
            setCarregando(true);

        })()
        }, [])

    return (<ComponenteLayoutPadrao carregando = {carregando} erro = {erro} msg = {msg}>

        <Container maxWidth = "x1" className="containerMargin">
            <Typography variant = "h2" component = "h1" textAlign = "center" >
                Planetas do Sistema Solar!
            </Typography>

            <Grid container spacing = {2} pt = {2}>
                {/* XS = 2 item */}
                {/* SM = 3 item */}
                {/* MD = 4 item*/}
                {/* LG = 5 item*/}
                {/* XL = 6 item */} 

                <Grid item xs = {6} sm = {4} md = {3} lg = {2} xl = {2}>
                    <Card className = "cardVidro">
                        <Link to = "/planeta/teste">
                            <CardContent>
                                <Typography variant = "h5" component = "h2" textAlign = "center">
                                Terra 1
                                </Typography>
                            </CardContent>
                        </Link>
                    </Card>
                </Grid>
            </Grid>
        </Container>

    </ComponenteLayoutPadrao>)
}