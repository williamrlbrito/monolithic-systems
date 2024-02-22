import { CreateProductUseCase } from "./create-product.usecase";

const MockRepository = () => {
  return {
    create: jest.fn(),
    find: jest.fn(),
  };
};

describe("Create product usecase unit test", () => {
  it("should create a product", async () => {
    const productRepository = MockRepository();
    const usecase = new CreateProductUseCase(productRepository);
    const input = {
      name: "Product 1",
      description: "Description 1",
      purchasePrice: 100,
      stock: 10,
    };
    const output = await usecase.execute(input);
    expect(productRepository.create).toHaveBeenCalled();
    expect(output.id).toBeDefined();
    expect(output.name).toBe(input.name);
    expect(output.description).toBe(input.description);
    expect(output.purchasePrice).toBe(input.purchasePrice);
    expect(output.stock).toBe(input.stock);
  });
});
