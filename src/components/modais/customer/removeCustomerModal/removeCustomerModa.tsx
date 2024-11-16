import * as S from "./styles";
import Modal from "react-modal";
import { stylesModalCustomer } from "./object-style";
import { Pointer, TextStrong } from "@styles/utils";
import { CustomButton } from "@components/customButton/button";
import { useCustomer } from "@hooks/useCustomer/useCustomer";
import CloseIcon from "@assets/icons/close-icon";
import { Loader } from "@components/Loader/loader";

export const RemoveCustomerModal = () => {
  const {
    modalRemove,
    dataCustomer,
    setModalRemove,
    deleteCustomer,
    isLoadingButton,
  } = useCustomer();

  return (
    <>
      <Modal
        isOpen={modalRemove}
        onRequestClose={() => {
          setModalRemove(false);
        }}
        style={stylesModalCustomer}
      >
        <S.ModalHeader>
          <S.Title>Excluir cliente</S.Title>
          <Pointer
            onClick={() => {
              setModalRemove(false);
            }}
          >
            <CloseIcon />
          </Pointer>
        </S.ModalHeader>

        <S.ModalContent>
          <S.Text>
            Você está prestes a excluir o cliente:{" "}
            <TextStrong>{dataCustomer?.name}</TextStrong>
          </S.Text>

          <S.WapperButton onClick={() => deleteCustomer(dataCustomer.id)}>
            <CustomButton height="base" variant="filled" borderRadius="small">
              {isLoadingButton ? <Loader color="white" /> : "Excluir"}
            </CustomButton>
          </S.WapperButton>
        </S.ModalContent>
      </Modal>
    </>
  );
};
