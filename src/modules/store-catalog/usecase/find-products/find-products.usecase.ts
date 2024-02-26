import { UseCaseInterface } from "../../../@shared/usecase/use-case.interface";
import { ProductGateway } from "../../gateway/product.gateway";

class FindProductsUseCase implements UseCaseInterface {
  constructor(readonly productRepository: ProductGateway) {}

  async execute(): Promise<FindProductsDto> {
    const products = await this.productRepository.find();
    return {
      products: products.map((product) => ({
        id: product.id.id,
        name: product.name,
        description: product.description,
        salesPrice: product.salesPrice,
      })),
    };
  }
}

export { FindProductsUseCase };
