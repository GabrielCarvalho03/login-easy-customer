import { formatToBRL } from "./format-number-input-in-BRL";

describe("#format-number-input-in-BRL", () => {
  describe("#validate-Input", () => {
    it("should format the number salary in the input for BRL currency when it is string", () => {
      const mockValueSalary = "5000";
      const formattedValue = formatToBRL(mockValueSalary).replace(
        /\u00A0/g,
        " "
      );
      expect(formattedValue.toString()).toEqual("R$ 5.000,00");
    });

    it("should format the number company valuation for BRL currency when it is number", () => {
      const mockValueSalary = 100000;
      const formattedValue = formatToBRL(mockValueSalary).replace(
        /\u00A0/g,
        " "
      );
      expect(formattedValue.toString()).toEqual("R$ 100.000,00");
    });
  });
  it("should return value 'R$ 00,00' salary field is null", () => {
    const mockValueSalary = null;
    const formattedValue = formatToBRL(mockValueSalary).replace(/\u00A0/g, " ");
    expect(formattedValue).toEqual("R$ 0,00");
  });

  it("should return value 'R$ 00,00' company valuation field is null", () => {
    const mockValueSalary = null;
    const formattedValue = formatToBRL(mockValueSalary).replace(/\u00A0/g, " ");
    expect(formattedValue).toEqual("R$ 0,00");
  });
});
