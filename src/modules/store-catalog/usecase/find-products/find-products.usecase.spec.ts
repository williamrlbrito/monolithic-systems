import { Id } from "../../../@shared/domain/value-object/id.value-object";
import { Product } from "../../domain/product.entity";
import { FindProductsUseCase } from "./find-products.usecase";

const product = new Product({
  id: new Id(),
  name: "Product 1",
  description: "Description 1",
  salesPrice: 100,
});

const product2 = new Product({
  id: new Id(),
  name: "Product 2",
  description: "Description 2",
  salesPrice: 200,
});

const MockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(Promise.resolve([product, product2])),
    findById: jest.fn(),
  };
};

describe("find products use case unit test", () => {
  it("should find products", async () => {
    const productRepository = MockRepository();
    const usecase = new FindProductsUseCase(productRepository);
    const result = await usecase.execute();

    expect(productRepository.find).toHaveBeenCalled();
    expect(result.products.length).toBe(2);
  });
});
