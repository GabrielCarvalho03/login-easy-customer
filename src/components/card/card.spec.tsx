import { fireEvent, getByTestId, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Card } from "@components/card/card";
import { CustomerDto } from "@dtos/customer/CustomerDto";
import * as useCustomer from "@hooks/useCustomer/useCustomer";

vi.mock("@hooks/useCustomer/useCustomer");

const mockSetModalCreateOrEdit = vi.fn();
const mockSetModalRemove = vi.fn();
const mockSetIsEdit = vi.fn();
const mockSetDataCustomer = vi.fn();
const mockAddSelectedCustomer = vi.fn();
const mockRemoveSelectedCustomer = vi.fn();

vi.spyOn(useCustomer, "useCustomer").mockReturnValue({
  setModalCreateOrEdit: mockSetModalCreateOrEdit,
  setModalRemove: mockSetModalRemove,
  setIsEdit: mockSetIsEdit,
  setDataCustomer: mockSetDataCustomer,
  addSelectedCustomer: mockAddSelectedCustomer,
  removeSelectedCustomer: mockRemoveSelectedCustomer,
});

const mockCustomer: CustomerDto = {
  id: 1,
  name: "John Doe",
  salary: 5000,
  companyValuation: 100000,
};

const user = userEvent.setup();

describe("#card", () => {
  it("should render the card with customer data", () => {
    const wrapper = render(<Card item={mockCustomer} />);
    expect(wrapper.getByText("John Doe")).toBeInTheDocument();
    expect(wrapper.getByText(/Salário:\s*R\$ 5.000,00/)).toBeInTheDocument();
    expect(wrapper.getByText(/Empresa:\s*R\$ 100.000,00/)).toBeInTheDocument();
  });

  it("should render the icons in the card", () => {
    const wrapper = render(<Card item={mockCustomer} />);
    const addIcon = wrapper.getByTestId("add-icon");
    const EditIcon = wrapper.getByTestId("edit-icon");
    const TrashIcon = wrapper.getByTestId("trash-icon");
    expect(addIcon).toBeInTheDocument();
    expect(EditIcon).toBeInTheDocument();
    expect(TrashIcon).toBeInTheDocument();
  });

  it("should call the function setModalCreateOrEdit ", async () => {
    const wrapper = render(<Card item={mockCustomer} />);
    const editButton = wrapper.getByTestId("edit-icon-wrapper");
    const user = userEvent.setup();

    await user.click(editButton);
    expect(mockSetModalCreateOrEdit).toHaveBeenCalledWith(true);
  });

  it("should call the function setModalCreateOrEdit with true ", async () => {
    const wrapper = render(<Card item={mockCustomer} />);
    const editButton = wrapper.getByTestId("edit-icon-wrapper");

    await user.click(editButton);
    expect(mockSetModalCreateOrEdit).toHaveBeenCalledWith(true);
  });
  it("should call the function isEdit with true ", async () => {
    const wrapper = render(<Card item={mockCustomer} />);
    const editButton = wrapper.getByTestId("edit-icon-wrapper");

    await user.click(editButton);
    expect(mockSetIsEdit).toHaveBeenCalledWith(true);
  });
});
