import { Sequelize } from "sequelize-typescript";
import { ProductModel } from "../repository/product.model";
import { CreateProductFacadeInputDTO } from "./product-adm.facade.interface";
import { ProductAdmFacadeFactory } from "../factory/facade.factory";
import { Id } from "../../@shared/domain/value-object/id.value-object";

describe("ProductAdmFacade unit test", () => {
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
    const productFacade = ProductAdmFacadeFactory.create();

    const input: CreateProductFacadeInputDTO = {
      name: "Product 1",
      description: "Description of product 1",
      purchasePrice: 10,
      stock: 10,
    };

    await productFacade.createProduct(input);

    const product = await ProductModel.findOne({
      where: { name: input.name },
    });

    expect(product.name).toBe(input.name);
    expect(product.description).toBe(input.description);
    expect(product.purchasePrice).toBe(input.purchasePrice);
    expect(product.stock).toBe(input.stock);
  });

  it("should check product stock", async () => {
    const productFacade = ProductAdmFacadeFactory.create();

    const input: CreateProductFacadeInputDTO = {
      name: "Product 1",
      description: "Description of product 1",
      purchasePrice: 10,
      stock: 10,
    };

    await productFacade.createProduct(input);
  });
});
