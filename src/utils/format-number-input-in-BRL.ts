export const formatToBRL = (value: string | number) => {
  const number =
    typeof value === "string"
      ? parseFloat(value.replace(/[^\d]/g, "")) 
      : value;
  if (isNaN(number)) return "";
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);
};
