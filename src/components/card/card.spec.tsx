import { fireEvent, getByTestId, render } from "@testing-library/react";
import { Card } from "@components/card/card";
import { CustomerDto } from "@dtos/customer/CustomerDto";
import * as useCustomer from "@hooks/useCustomer/useCustomer";

const mockSetModalCreateOrEdit = vi.fn();
const mockSetModalRemove = vi.fn();
const mockSetIsEdit = vi.fn();
const mockSetDataCustomer = vi.fn();
const mockAddSelectedCustomer = vi.fn();
const mockRemoveSelectedCustomer = vi.fn();

vi.mock("@hooks/useCustomer/useCustomer", () => ({
  useCustomer: () => ({
    isEdit: false,
    setIsEdit: vi.fn(),
    isLoading: false,
    setIsLoading: vi.fn(),
    isLoadingButton: false,
    setIsLoadingButton: vi.fn(),
    modalCreateOrEdit: false,
    setModalCreateOrEdit: vi.fn(),
    modalRemove: false,
    setModalRemove: vi.fn(),
    dataCustomer: null,
    setDataCustomer: vi.fn(),
    customers: [],
    setCustomers: vi.fn(),
    listAllCustomer: vi.fn(),
    createCustomer: vi.fn(),
    updateCustomer: vi.fn(),
    deleteCustomer: vi.fn(),
    selectedCustomers: [],
    setSelectedCustomers: vi.fn(),
    addSelectedCustomer: vi.fn(),
    removeSelectedCustomer: vi.fn(),
  }),
}));

const mockCustomer: CustomerDto = {
  id: 1,
  name: "John Doe",
  salary: 5000,
  companyValuation: 100000,
};
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
});
