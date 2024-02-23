import { ProductAdmFacade } from "../facade/product-adm.facade";
import { ProductAdmFacadeInterface } from "../facade/product-adm.facade.interface";
import { ProductRepository } from "../repository/product.repository";
import { CheckStockUseCase } from "../usecase/check-stock/check-stock.usecase";
import { CreateProductUseCase } from "../usecase/create-product/create-product.usecase";

class ProductAdmFacadeFactory {
  static create(): ProductAdmFacadeInterface {
    const productRepository = new ProductRepository();
    const createProductUseCase = new CreateProductUseCase(productRepository);
    const checkStockUseCase = new CheckStockUseCase(productRepository);
    return new ProductAdmFacade({
      createProductUseCase,
      checkStockUseCase,
    });
  }
}

export { ProductAdmFacadeFactory };
