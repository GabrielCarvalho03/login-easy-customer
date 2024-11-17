import { CustomButton } from "@components/customButton/button";
import { CustomInput } from "@components/customInput/custom-input";
import { Datauser } from "@hooks/useUser/schema";
import * as S from "@pages/start/styles";
import { useForm } from "react-hook-form";

export const Start = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Datauser>({
    mode: "all",
    reValidateMode: "onChange",
  });
  const handledate = (data: any) => {
    window.location.href = `https://easy-customer-zif6.vercel.app/home/${data.name}/clientes`;
  };

  return (
    <S.Container>
      <S.Wapper>
        <S.Title>Olá, seja bem-vindo!</S.Title>
        <S.Form onSubmit={handleSubmit(handledate)}>
          <CustomInput
            {...register("name")}
            borderRadius="small"
            height="large"
            placeholder="Digite seu nome"
            error={errors.name?.message}
          />
          <CustomButton
            borderRadius="small"
            variant="filled"
            height="large"
            type="submit"
          >
            <S.TitleButton>Entrar</S.TitleButton>
          </CustomButton>
        </S.Form>
      </S.Wapper>
    </S.Container>
  );
};
