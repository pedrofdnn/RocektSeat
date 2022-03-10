import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { ModalCo } from "./components/Modal";
import { GlobalStyle } from "./Styles/Global";


export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <ModalCo />
      <GlobalStyle />
    </>
  )
}