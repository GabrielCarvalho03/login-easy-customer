import { Card } from "@components/card/card";
import { useEffect } from "react";
import * as S from "./styles";
import { CustomButton } from "@components/customButton/button";

import { TextStrong } from "@styles/utils";
import { ModalCustomer } from "@components/modais/customer/addAndEdit/customer";
import { useCustomer } from "@hooks/useCustomer/useCustomer";
import { CustomerDto } from "@dtos/customer/CustomerDto";
import { RemoveCustomerModal } from "@components/modais/customer/removeCustomerModal/removeCustomerModa";
import { Filter } from "@components/filter/filter";
import { Loader } from "@components/Loader/loader";
import { usePagination } from "@hooks/usePagination/usePagination";

export const Home = () => {
  const {
    setModalCreateOrEdit,
    setIsEdit,
    listAllCustomer,
    customers,
    isLoading,
  } = useCustomer();
  const { handlePageChange, actualPage } = usePagination();
  useEffect(() => {
    listAllCustomer({ page: actualPage, limit: 16 });
  }, []);

  return (
    <>
      <S.Container>
        {isLoading && (
          <S.WapperLoading>{isLoading && <Loader size={30} />}</S.WapperLoading>
        )}

        {customers.clients?.length > 0 && !isLoading && (
          <>
            <S.Wapper>
              <S.BoxLenghtAndFilter>
                <S.Lenght>
                  <TextStrong>16</TextStrong> clientes encontrados:
                </S.Lenght>

                <S.WapperFilter>
                  <S.FilterText>Clientes por página:</S.FilterText>
                  <Filter />
                </S.WapperFilter>
              </S.BoxLenghtAndFilter>

              <S.CardWapper>
                {customers.clients?.map((item: CustomerDto) => (
                  <Card item={item} />
                ))}
              </S.CardWapper>

              <S.WapperButton
                onClick={() => {
                  setModalCreateOrEdit(true);
                  setIsEdit(false);
                }}
              >
                <CustomButton
                  height="base"
                  variant="outlined"
                  borderRadius="small"
                >
                  <S.TitleButton> Criar cliente</S.TitleButton>
                </CustomButton>
              </S.WapperButton>
            </S.Wapper>
            <S.CustomPagination
              onChange={(e, value) => handlePageChange(value)}
              count={customers.totalPages}
              page={actualPage}
              shape="rounded"
              data-testid="home-pagination"
            />
          </>
        )}
      </S.Container>
      <ModalCustomer />
      <RemoveCustomerModal />
    </>
  );
};
