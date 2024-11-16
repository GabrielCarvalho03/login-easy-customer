import { formatNumberInBRL } from "./format-number-in-BRL";

describe("#format-number-in-BRL", () => {
  describe("#validate", () => {
    it("should format the number salary for BRL currency", () => {
      const mockValueSalary = 5000;
      const formattedValue = formatNumberInBRL(mockValueSalary).replace(
        /\u00A0/g,
        " "
      );
      expect(formattedValue.toString()).toEqual("R$ 5.000,00");
    });

    it("should format the number company valuation for BRL currency", () => {
      const mockValueSalary = 100000;
      const formattedValue = formatNumberInBRL(mockValueSalary).replace(
        /\u00A0/g,
        " "
      );
      expect(formattedValue.toString()).toEqual("R$ 100.000,00");
    });
  });
});
