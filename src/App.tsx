import { useState } from "react";
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');   //Acessibility feature from React-Modal

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {      //When User clicks to open the modal
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {     //When User clicks to close the modal
    setIsNewTransactionModalOpen(false);
  }

  return (

    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
      </Modal>
      <GlobalStyle />
    </>
  );
}

