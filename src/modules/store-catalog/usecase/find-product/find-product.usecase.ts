import { UseCaseInterface } from "../../../@shared/usecase/use-case.interface";
import { ProductGateway } from "../../gateway/product.gateway";

class FindProductUseCase implements UseCaseInterface {
  constructor(readonly productRepository: ProductGateway) {}

  async execute(input: FindProductInputDTO): Promise<FindProductOutputDTO> {
    const product = await this.productRepository.findById(input.id);
    return {
      id: product.id.id,
      name: product.name,
      description: product.description,
      salesPrice: product.salesPrice,
    };
  }
}

export { FindProductUseCase };
