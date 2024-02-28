import { StoreCatalogFacade } from "../facade/store-catalog.facade";
import { ProductRepository } from "../repository/product.repository";
import { FindProductUseCase } from "../usecase/find-product/find-product.usecase";
import { FindProductsUseCase } from "../usecase/find-products/find-products.usecase";

class StoreCatalogFacadeFactory {
  static create(): StoreCatalogFacade {
    const productRepository = new ProductRepository();
    const findProductUseCase = new FindProductUseCase(productRepository);
    const findProductsUseCase = new FindProductsUseCase(productRepository);

    return new StoreCatalogFacade(findProductUseCase, findProductsUseCase);
  }
}

export { StoreCatalogFacadeFactory };
