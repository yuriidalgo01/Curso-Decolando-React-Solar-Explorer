import { Card, CardActionArea, CardContent, Container, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ComponenteLayoutPadrao from "../componentes/layout/padrao";
import ApiPlanetas from "../api/planetas/apiPlanetas";

export default function PaginaPlanetas() {
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);
    const [planetas, setPlanetas] = useState([]);
    
    // eslint-disable-next-line
    const [msg, setMsg] = useState(null);


    useEffect(() => {
        (async () => {
            setCarregando(true);
            try {
                let resposta = await ApiPlanetas.obterTodos();
                setPlanetas(resposta);
            } catch (error) {
                setErro({
                    subtitulo: "Não foi possível obter os planetas do sistema solar.",
                    descricao: String(error)
                });
            } finally {
                setCarregando(false);
            }
        })();
    }, []);

    return (
        <ComponenteLayoutPadrao carregando={carregando} erro={erro} msg={msg}>
            {/* Corrigido para "xl" com L */}
            <Container maxWidth="xl" className="containerMargin">
                <Typography variant="h2" component="h1" align="center">
                    Planetas do Sistema Solar!
                </Typography>

                <Grid container spacing={2} pt={2}>
                    {planetas.map((planeta, index) => (
                        /* Adicionada a propriedade key */
                        <Grid 
                            item 
                            xs={6} sm={4} md={3} lg={2} xl={2} 
                            key={planeta?.id || planeta?.slug || index}
                        >
                            <Card className="cardVidro">
                                {/* Integrado o Link diretamente no CardActionArea */}
                                <CardActionArea component={Link} to={`/apiPlanetas/${planeta?.slug}`}>
                                    <CardContent>
                                        <img 
                                            src={planeta?.imgUrl} 
                                            alt={planeta?.descricao || planeta?.descrição || planeta?.nome} 
                                            width="100%" 
                                        />
                                        <Typography variant="h5" component="h2" align="center">
                                            {planeta?.nome}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </ComponenteLayoutPadrao>
    );
}