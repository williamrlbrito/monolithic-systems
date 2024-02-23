import { Product } from "../../domain/product.entity";
import { CheckStockUseCase } from "./check-stock.usecase";

const product = new Product({
  name: "Product",
  description: "Product description",
  purchasePrice: 100,
  stock: 10,
});

const MockRepository = () => ({
  create: jest.fn(),
  find: jest.fn().mockReturnValue(Promise.resolve(product)),
});

describe("CheckStock usecase unit test", () => {
  it("should get stock of a product", async () => {
    const repository = MockRepository();
    const usecase = new CheckStockUseCase(repository);
    const result = await usecase.execute({ productId: product.id.id });
    expect(repository.find).toHaveBeenCalled();
    expect(result.productId).toBe(product.id.id);
    expect(result.stock).toBe(product.stock);
  });
});
