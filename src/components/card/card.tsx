import * as S from "./styles";
import AddIcon from "@assets/icons/add-icon";
import EditIcon from "@assets/icons/edit-icon";
import RemoveClientIcon from "@assets/icons/remove-client-Icon";
import TrashIcon from "@assets/icons/trash-icon";
import { CustomerDto } from "@dtos/customer/CustomerDto";
import { useCustomer } from "@hooks/useCustomer/useCustomer";
import { formatNumberInBRL } from "@utils/format-number-in-BRL";

type CardStyleProps = {
  fontWeight?: "bold" | "normal";
  item: CustomerDto;
  isClientSelect?: boolean;
};

export const Card = ({
  fontWeight,
  item,
  isClientSelect = false,
}: CardStyleProps) => {
  const {
    setModalCreateOrEdit,
    setModalRemove,
    setIsEdit,
    setDataCustomer,
    addSelectedCustomer,
    removeSelectedCustomer,
  } = useCustomer();
  return (
    <S.CardContainer>
      <S.Text fontWeight={"bold"}>{item.name}</S.Text>
      <S.Text lineHeight={"base"} size={"small"} fontWeight={fontWeight}>
        Salário: {formatNumberInBRL(item.salary)}
      </S.Text>
      <S.Text lineHeight={"base"} size={"small"}>
        Empresa: {formatNumberInBRL(item.companyValuation)}
      </S.Text>

      {!isClientSelect && (
        <S.WapperActions>
          <S.pointer onClick={() => addSelectedCustomer(item)}>
            <AddIcon data-testid="add-icon" />
          </S.pointer>

          <S.pointer
            data-testid="edit-icon-wrapper"
            onClick={() => {
              setModalCreateOrEdit(true);
              setIsEdit(true);
              setDataCustomer(item);
            }}
          >
            <EditIcon data-testid="edit-icon" />
          </S.pointer>

          <S.pointer
            onClick={() => {
              setModalRemove(true);
              setDataCustomer(item);
            }}
          >
            <TrashIcon data-testid="trash-icon" />
          </S.pointer>
        </S.WapperActions>
      )}

      {isClientSelect && (
        <S.WapperActions>
          <S.WapperRemoveClientIcon>
            <S.pointer onClick={() => removeSelectedCustomer(item)}>
              <RemoveClientIcon />
            </S.pointer>
          </S.WapperRemoveClientIcon>
        </S.WapperActions>
      )}
    </S.CardContainer>
  );
};
