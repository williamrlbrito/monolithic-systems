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

  it("should find all products", async () => {
    const facade = StoreCatalogFacadeFactory.create();
    const one = new Id().id;
    const two = new Id().id;
    await ProductModel.create({
      id: one,
      name: "Product one",
      description: "Description of product one",
      salesPrice: 10,
    });
    await ProductModel.create({
      id: two,
      name: "Product two",
      description: "Description of product two",
      salesPrice: 20,
    });

    const result = await facade.find();
    expect(result.products.length).toBe(2);
    expect(result.products[0].id).toBe(one);
    expect(result.products[0].name).toBe("Product one");
    expect(result.products[0].description).toBe("Description of product one");
    expect(result.products[0].salesPrice).toBe(10);
    expect(result.products[1].id).toBe(two);
    expect(result.products[1].name).toBe("Product two");
    expect(result.products[1].description).toBe("Description of product two");
    expect(result.products[1].salesPrice).toBe(20);
  });
});
