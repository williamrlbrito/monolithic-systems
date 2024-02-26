import { Sequelize } from "sequelize-typescript";
import { ProductModel } from "./product.model";
import { Id } from "../../@shared/domain/value-object/id.value-object";
import { ProductRepository } from "./product.repository";

describe("product repository unit test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });
    sequelize.addModels([ProductModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should find products", async () => {
    await ProductModel.bulkCreate([
      {
        id: new Id().id,
        name: "product 1",
        description: "description 1",
        salesPrice: 100,
      },
      {
        id: new Id().id,
        name: "product 2",
        description: "description 2",
        salesPrice: 200,
      },
    ]);

    const productRepository = new ProductRepository();
    const products = await productRepository.find();
    expect(products.length).toBe(2);
  });
});
