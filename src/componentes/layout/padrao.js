import { CircularProgress } from "@mui/material";
import ComponenteLayoutMsg from "./msg";
import { Error, PriorityHigh } from "@mui/icons-material";

export default function ComponenteLayoutPadrao(props) {
    return(
        <>
        {
            (props?.carregando === true) ? (<>
                <ComponenteLayoutMsg icone = {<CircularProgress size={"100%"} color = "white"/>} titulo = {"Carregando ..."} />
            </>) : (<>
            {
             (props?.erro) ? (<>
                <ComponenteLayoutMsg icone = {<Error fontSize="large" color = "white"/>} titulo = {"Erro"} 
                subtitulo = {props?.erro?.subtitulo} descricao = {props?.erro?.descricao} btnTenteNovamente = {true}/>
             </>) : (<>
             {(props?.msg) ? (<>
                <ComponenteLayoutMsg {...props?.msg} icone = {props?.msg?.icone || <PriorityHigh fontSize="large" color = "white"/>} />
             </>) : (<>
                {props.children}
             </>)
            }
             </>)    
            }
            </>)
        }
        </>)
}