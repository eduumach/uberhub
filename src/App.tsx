import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Startups,
  EmpresasTech,
  MapaInovacao,
  Vagas,
  Eventos,
  Noticias,
  Oportunidades,
  Investimentos,
  Beneficios,
  Contato,
} from "./pages";
import { AuthProvider } from "@/contexts/auth-context";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/components/layout";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="vite-ui-theme">
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/startups" element={<Startups />} />
              <Route path="/empresas-tech" element={<EmpresasTech />} />
              <Route path="/mapa-inovacao" element={<MapaInovacao />} />
              <Route path="/vagas" element={<Vagas />} />
              <Route path="/eventos" element={<Eventos />} />
              <Route path="/noticias" element={<Noticias />} />
              <Route path="/oportunidades" element={<Oportunidades />} />
              <Route path="/investimentos" element={<Investimentos />} />
              <Route path="/beneficios" element={<Beneficios />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App