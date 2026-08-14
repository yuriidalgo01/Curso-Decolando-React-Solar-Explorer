import { Container, Typography, Stack, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShareIcon from "@mui/icons-material/Share";
import { useEffect, useState } from "react";
import ComponenteLayoutPadrao from "../componentes/layout/padrao";
import ApiPlanetas from "../api/planetas/apiPlanetas";

export default function PaginaPlaneta() {
    const parametros = useParams();

    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);
    const [msg, setMsg] = useState(null);
    const [planeta, setPlaneta] = useState(null);

    useEffect(() => {
        (async () => {
            setCarregando(true);
            setErro(null);

            try {
                let resposta = await ApiPlanetas.obterUnicoPorSlug(parametros.slug);
                
                // Verifica se encontrou o planeta no array de retorno
                const planetaEncontrado = Array.isArray(resposta) ? resposta[0] : resposta;

                if (!planetaEncontrado) {
                    setErro({
                        subtitulo: "Planeta não encontrado.",
                        descricao: "O planeta que você está procurando não existe."
                    });
                } else {
                    setPlaneta(planetaEncontrado);
                }
            } catch (error) {
                setErro({
                    subtitulo: "Não foi possível obter o planeta.",
                    descricao: String(error)
                });
            } finally {
                setCarregando(false);
            }
        })();
    }, [parametros.slug]); // Dependência atualizada

    function ClickCompartilhar() {
        if (navigator.share) {
            navigator.share({
                url: window.location.href,
                text: `Explore o planeta ${planeta?.nome || ""} e descubra suas características.`,
                title: `Conheça ${planeta?.nome || "este planeta"}`
            }).catch((err) => console.log("Compartilhamento cancelado:", err));
        } else {
            // Fallback caso o navegador não suporte Web Share API
            navigator.clipboard.writeText(window.location.href);
            alert("Link copiado para a área de transferência!");
        }
    }

    return (
        <ComponenteLayoutPadrao carregando={carregando} erro={erro} msg={msg}>
            <Container maxWidth="xl" className="containerMargin">

                {/* Botão integrado diretamente com o React Router */}
                <Button 
                    component={Link} 
                    to="/planetas" 
                    variant="outlined" 
                    size="large" 
                    startIcon={<ArrowBackIosNewIcon />}
                    sx={{ mb: 3 }}
                >
                    Voltar
                </Button>

                {planeta && (
                    <Stack
                        direction="column"
                        spacing={2}
                        sx={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img 
                            className="animacaoEfeitoGirar" 
                            src={planeta?.imgUrl || "/img/astronauta.png"} 
                            alt={planeta?.nome} 
                            style={{ maxWidth: "300px", width: "100%" }}
                        />
                        <Typography variant="h3" component="h1" align="center">
                            {planeta?.nome}
                        </Typography>
                        <Typography variant="body1" component="p" align="center">
                            {planeta?.descricao || planeta?.descrição}
                        </Typography>

                        <Button 
                            variant="contained" 
                            size="large" 
                            onClick={ClickCompartilhar} 
                            startIcon={<ShareIcon />}
                        >
                            Compartilhar
                        </Button>
                    </Stack>
                )}

            </Container>
        </ComponenteLayoutPadrao>
    );
}