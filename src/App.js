import { ThemeProvider } from "@mui/material"
import tema from "./Tema";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaInicio from "./paginas/inicio";

export default function App() {
  return (<>
  <ThemeProvider theme={tema}>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<PaginaInicio />} />

      </Routes>
    </BrowserRouter>
  </ThemeProvider>
    </>); 
}