import { DivImage } from "@/components/card/styles";
import { DivModal } from "@/components/modais/styles";
import { DivDescription } from "@/components/modais/modalFilme/styles";

type Props = {
  open: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
};

export function ModalMovie({ open, handleClose, id }: Props) {
  console.log(id);
  return (
    <DivModal>
      <DivImage>
        <h1>testeimage</h1>
      </DivImage>
      <DivDescription>
        <h1>nome</h1>
        <h1>ano</h1>
        <h1>sinopse</h1>
        <span>categorias</span>
      </DivDescription>
      <div onClick={() => handleClose(!open)}>
        <h1>fechar</h1>
      </div>
    </DivModal>
  );
}
