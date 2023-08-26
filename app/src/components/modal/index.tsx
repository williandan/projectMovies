import { DivModal } from "./styles";
import { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  children: ReactNode;
}

export default function Modal({ open, children }: ModalProps) {
  return <>{open && <DivModal>{children}</DivModal>}</>;
}
