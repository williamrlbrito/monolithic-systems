import { Sequelize } from "sequelize-typescript";
import { ProductModel } from "./product.model";
import { Product } from "../domain/product.entity";
import { ProductRepository } from "./product.repository";
import { Id } from "../../@shared/domain/value-object/id.value-object";

describe("Product repository unit test", () => {
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

    const db = await ProductModel.findOne({
      where: { id: product.id.id },
    });

    expect(product.id.id).toBe(db.getDataValue("id"));
    expect(product.name).toBe(db.getDataValue("name"));
    expect(product.description).toBe(db.getDataValue("description"));
    expect(product.purchasePrice).toBe(db.getDataValue("purchasePrice"));
    expect(product.stock).toBe(db.getDataValue("stock"));
  });

  it("should find a product", async () => {
    const productRepository = new ProductRepository();
    const idToFind = new Id();
    ProductModel.create({
      id: idToFind.id,
      name: "Product 1",
      description: "Description 1",
      purchasePrice: 100,
      stock: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const product = await productRepository.find(idToFind.id);

    expect(product.id.id).toBe(idToFind.id);
    expect(product.name).toBe("Product 1");
    expect(product.description).toBe("Description 1");
    expect(product.purchasePrice).toBe(100);
    expect(product.stock).toBe(10);
  });
});
