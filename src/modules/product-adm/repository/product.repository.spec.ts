import { Sequelize } from "sequelize-typescript";
import { ProductModel } from "./product.model";
import { Product } from "../domain/product.entity";
import { ProductRepository } from "./product.repository";

describe("Product repository unit test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
      models: [ProductModel],
    });

    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a product", async () => {
    const props = {
      name: "Product 1",
      description: "Description 1",
      purchasePrice: 100,
      stock: 10,
    };
    const product = new Product(props);
    const productRepository = new ProductRepository();
    await productRepository.create(product);
  });
});
