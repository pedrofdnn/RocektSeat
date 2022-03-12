import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal'
import { Header } from "./components/Header";
import { GlobalStyle } from "./Styles/Global";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root'); // comando que coloca a função na leitura de acessibilidade.

export function App() {

  const [isNewTransationModalOpen, setIsNewTransationModalOpen] = useState(false);

  function handleOpenNewTransationModalOpen() {
    setIsNewTransationModalOpen(true);
  }

  function handleCloseNewTransationModalOpen() {
    setIsNewTransationModalOpen(false);
  }


  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransationModalOpen} />

      <NewTransactionModal
        isOpen={isNewTransationModalOpen}
        onRequestClose={handleCloseNewTransationModalOpen}
      />

      <Dashboard />
      <GlobalStyle />
    </>
  )
}