import { Id } from "../../../@shared/domain/value-object/id.value-object";
import { Product } from "../../domain/product.entity";

const product = new Product({
  id: new Id(),
  name: "Product 1",
  description: "Description 1",
  salesPrice: 100,
});

const MockRepository = () => {
  return {
    find: jest.fn(),
    findById: jest.fn().mockReturnValue(Promise.resolve(product)),
  };
};

describe("find product use case unit test", () => {
  it("should find product", async () => {
    const productRepository = MockRepository();
    const usecase = new FindProductUseCase(productRepository);
    const input = { id: product.id.id };
    const output = await usecase.execute(input);

    expect(productRepository.findById).toHaveBeenCalled();
    expect(output.id).toBe(product.id.id);
    expect(output.name).toBe(product.name);
    expect(output.description).toBe(product.description);
    expect(output.salesPrice).toBe(product.salesPrice);
  });
});
