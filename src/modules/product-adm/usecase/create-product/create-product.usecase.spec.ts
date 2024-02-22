const MockRepository = () => {
  return {
    create: jest.fn(),
    find: jest.fn(),
  };
};

describe("Create product usecase unit test", () => {
  it("should create a product", async () => {
    // Arrange
    const productRepository = MockRepository();
    const usecase = new CreateProductUsecase(productRepository);
    const input = {
      name: "Product 1",
      description: "Description 1",
      purchasePrice: 100,
      stock: 10,
    };
    // Act
    await usecase.execute(input);
    // Assert
    expect(usecase.execute).toHaveBeenCalledWith(input);
  });
});
