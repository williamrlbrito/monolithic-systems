import { Sequelize } from "sequelize-typescript";
import { ProductModel } from "../repository/product.model";
import { ProductRepository } from "../repository/product.repository";
import { CreateProductUseCase } from "../usecase/create-product/create-product.usecase";
import { ProductAdmFacade } from "./product-adm.facade";
import { CreateProductFacadeInputDTO } from "./product-adm.facade.interface";

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
    const productRepository = new ProductRepository();
    const createProductUseCase = new CreateProductUseCase(productRepository);
    const productFacade = new ProductAdmFacade({
      createProductUseCase,
      checkStockUseCase: null,
    });

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

    expect(product.getDataValue("name")).toBe(input.name);
    expect(product.getDataValue("description")).toBe(input.description);
    expect(product.getDataValue("purchasePrice")).toBe(input.purchasePrice);
    expect(product.getDataValue("stock")).toBe(input.stock);
  });
});
