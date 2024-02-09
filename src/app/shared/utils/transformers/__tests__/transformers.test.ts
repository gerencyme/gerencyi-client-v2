import * as T from "@shared/utils/transformers";

it("should return a capitalize string", () => {
  const sut = T.capitalizeName("john doe");

  expect(sut).toEqual("John Doe");
});

describe("maskCpfOrCnpj", () => {
  it("should add a mask for cpf", () => {
    const sut = T.maskCpfOrCnpj("00000000000");

    expect(sut).toEqual("000.000.000-00");
  });

  it("should add a mask for cnpj", () => {
    const sut = T.maskCpfOrCnpj("00000000000000");

    expect(sut).toEqual("00.000.000/0000-00");
  });
});

describe("formatPrice", () => {
  it("should format a number into a BRL currency string", () => {
    const stringAmount = parseFloat("250");

    const sut = T.formatPrice(stringAmount);

    const received = stringAmount.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    expect(sut).toEqual(received);
  });

  it("should format a string into a BRL currency string", () => {
    const numberAmount = 250;

    const sut = T.formatPrice(numberAmount);

    const received = numberAmount.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    expect(sut).toEqual(received);
  });
});

describe("getFirstThreeNames", () => {
  const name = "John Doe With a Large Name";

  it("should return the first three names", () => {
    const sut = T.getFirstThreeNames(name);

    expect(sut.firstThree).toEqual("John Doe With");
  });

  it("should return what remaining,", () => {
    const sut = T.getFirstThreeNames(name);

    expect(sut.remaining).toEqual("a Large Name");
  });

  it("should not broken the system if string as lower than 3 words,", () => {
    const shortname = "John Doe";

    const sut = T.getFirstThreeNames(shortname);

    expect(sut.remaining).toEqual("");
  });
});

it("should add a mask like a brazilian phone number", () => {
  const sut = T.formatPhoneNumber("00000000000");

  expect(sut).toEqual("(00) 00000-0000");
});

it("should format a string into a CEP", () => {
  const sut = T.formatCep("00000000");

  expect(sut).toEqual("00000-000");
});

describe("onlyLetters", () => {
  it("should return just UpperCase and trimmed letters fromt the string", () => {
    const stringWithNumberAndLetters =
      "this @1 - 2 - 3 - 4 @ should be removed";
    const sut = T.onlyLetters(stringWithNumberAndLetters);

    const received = "THISSHOULDBEREMOVED";

    expect(sut).toEqual(received);
  });

  it("should not broken if receive a string without letters and return a empty string", () => {
    const stringWithNumberAndLetters = "@1 - 2 - 3 - 4 @";
    const sut = T.onlyLetters(stringWithNumberAndLetters);

    expect(sut).toEqual("");
  });
});
