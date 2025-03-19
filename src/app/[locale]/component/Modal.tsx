import { useEffect, useState } from "react";
import Register from "./RegisterModal";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  onClose: any;
  type: string;
  open: boolean;
}
export default function Modal({ onClose, type, open = false }: ModalProps) {
  const [openModal, setModal] = useState(false);

  const handleModal = () => {
    onClose();
    setModal(!openModal);
  };

  return (
    <>
      <button onClick={handleModal} className="close">
        <IoClose />
      </button>
      <div className="modal">{type == "register" && <Register />}</div>
    </>
  );
}
