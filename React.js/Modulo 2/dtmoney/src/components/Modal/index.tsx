import { useState } from 'react';
import Modal from 'react-modal';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function ModalCo({ onOpenNewTransactionModal }: HeaderProps) {
    const [isNewTransationModalOpen, setIsNewTransationModalOpen] = useState(false);

    function handleOpenNewTransationModalOpen() {
        setIsNewTransationModalOpen(true);
    }

    function handleCloseNewTransationModalOpen() {
        setIsNewTransationModalOpen(false);
    }

    return (

        <Modal
            isOpen={isNewTransationModalOpen}
            onRequestClose={handleCloseNewTransationModalOpen}
        >
            <h2>Nova Transação</h2>
        </Modal>
    )
}



