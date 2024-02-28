import { Sequelize } from "sequelize-typescript";
import { ProductModel } from "../repository/product.model";
import { Id } from "../../@shared/domain/value-object/id.value-object";
import { StoreCatalogFacadeFactory } from "../factory/facade.factory";

describe("StoreCatalogFacade unit test", () => {
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

  it("should find a product", async () => {
    const facade = StoreCatalogFacadeFactory.create();
    const id = new Id().id;
    await ProductModel.create({
      id,
      name: "Product",
      description: "Description of product",
      salesPrice: 10,
    });

    const result = await facade.findById(id);
    expect(result.id).toBe(id);
    expect(result.name).toBe("Product");
    expect(result.description).toBe("Description of product");
    expect(result.salesPrice).toBe(10);
  });
});
