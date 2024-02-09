export const capitalizeName = (str: string) => {
  return str
    .trim()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export function maskCpfOrCnpj(value: string) {
  if (!value) return "";

  value = value.replace(/\D/g, "");
  if (value.length > 13) {
    value = value.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d)/,
      "$1.$2.$3/$4-$5",
    );
  } else {
    value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d)/, "$1.$2.$3-$4");
  }

  return value;
}

export const formatPrice = (price: number | undefined | string) => {
  const numericPrice =
    typeof price === "string" ? parseFloat(price.replace(",", ".")) : price;
  return numericPrice?.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

export const getFirstThreeNames = (fullName: string) => {
  const names = fullName.split(" ");
  const firstThreeNames = names.slice(0, 3);
  const remainingNames = names.slice(3);

  return {
    firstThree: firstThreeNames.join(" "),
    remaining: remainingNames.join(" "),
  };
};

export const formatPhoneNumber = (value: string) => {
  return value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
};

export const formatCep = (cep: string) => {
  if (!cep) return "";

  const cleanedCEP = cep.replace(/\D/g, "");

  return `${cleanedCEP.slice(0, 5)}-${cleanedCEP.slice(5)}`;
};

export const onlyLetters = (value: string) => {
  if (!value) return "";

  value = value.replace(/\s/g, "");

  return value.replace(/[^A-Za-z]/g, "").toUpperCase();
};
